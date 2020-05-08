//import the require dependencies
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var cors = require('cors');
const { mongoDB, frontendURL, secret, nexmoKey, nexmoSecret, gmailid, gmailpw } = require('./config');
const User = require('./Models/UserModel');
const Fire = require('./Models/FireModel');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

//use cors to allow cross origin resource sharing
app.use(cors({ origin: "*", credentials: true }));
app.use(bodyParser());
//use express session to maintain session data
app.use(session({
    secret: '280project',
    resave: false, // Forces the session to be saved back to the session store, even if the session was never modified during the request
    saveUninitialized: false, // Force to save uninitialized session to db. A session is uninitialized when it is new but not modified.
    duration: 60 * 60 * 1000,    // Overall duration of Session : 30 minutes : 1800 seconds
    activeDuration: 5 * 60 * 1000
}));

//Allow Access Control
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});


const mongoose = require('mongoose');

var options = {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    poolSize: 500,
    bufferMaxEntries: 0
};

mongoose.connect(mongoDB, options, (err, res) => {
    if (err) {
        console.log(err);
        console.log(`MongoDB Connection Failed`);
    } else {
        console.log(`MongoDB Connected`);
    }
});


// SEND SMS

const Nexmo = require('nexmo');

const nexmo = new Nexmo({
    apiKey: nexmoKey,
    apiSecret: nexmoSecret
});


// SEND MAIL

const nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: gmailid,
        pass: gmailpw
    }
});





app.post('/register', (req, res) => {

    User.findOne({ email: req.body.email }, (error, user) => {
        if (error) {
            res.status(500).send("Some error occurred")
        }
        if (user) {
            res.send({ success: false, error: "User already exists!" });
        }
        else {
            bcrypt.hash(req.body.pw, saltRounds).then((hash) => {
                let newUser = new User({ ...req.body, pw: hash });

                newUser.save((error, data) => {
                    console.log("data: ", data, error);
                    if (error) {
                        res.status(500).send(error)
                    }
                    else {
                        res.send({ success: true, msg: "User Creation Successful!" });
                    }
                });
            });
        }
    });
});

app.post('/login', (req, res) => {
    console.log('req', req.body)

    User.findOne({ email: req.body.email }, (error, user) => {
        if (error) {
            res.status(500).send("Some Error Occurred!")
        }
        if (user) {
            bcrypt.compare(req.body.pw, user.pw).then((pwRes) => {
                if (!pwRes)
                    res.status(500).send("Some Error Occurred!")
                else {
                    const payload = { _id: user._id, email: user.email };
                    const token = jwt.sign(payload, secret, {
                        expiresIn: 1008000
                    });
                    res.send({ success: true, token: "JWT " + token });
                }
            });

        }
        else {
            res.send({ success: false, error: "Invalid Credentials" });
        }
    });
});

app.post('/addFireData', async (req, res) => {
    let a = await addData(req);

    res.send({ success: true, result: a });
})


const addData = async (req) => {
    const { loc, intensity, cause } = req.body;
    console.log('loc intensity, cause', loc, intensity, cause)

    const fire = new Fire({
        loc,
        intensity, cause
    });

    return await fire.save();
}


app.post('/sendWildFireAlert', async (req, res) => {
    console.log('req', req.body)

    const { lat, lng } = req.body.loc;

    let a = await addData(req);

    console.log('a', a)

    let users = await User.find();

    users = users.forEach(currUser => {
        if (!(currUser.loc && currUser.loc.lat)) return;
        console.log('', getDistance(currUser.loc.lat, currUser.loc.lng, lat, lng))

        if (getDistance(currUser.loc.lat, currUser.loc.lng, lat, lng) < 0.2) {
            console.log("sent");

            const from = '17065221566';
            const to = currUser.phone;
            const text = 'Wildfire Alert! There is a wildfire in your area!';

            nexmo.message.sendSms(from, to, text);


            var mailOptions = {
                from: gmailid,
                to: currUser.email,
                subject: 'WILDFIRE APP ALERT!',
                text: 'There seems to be a wildfire in your area... Take care!'
            };

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
        }
    })

    res.send({ success: true, msg: "Alert Sent!" });

})


const getDistance = (x1, y1, x2, y2) => {

    var xs = x2 - x1,
        ys = y2 - y1;

    xs *= xs;
    ys *= ys;

    return Math.sqrt(xs + ys);

}


app.get('/getFireData', async (req, res) => {
    // var fs = require("fs");
    // var contents = fs.readFileSync("wildfire.json");

    // var jsonContent = JSON.parse(contents);

    // jsonContent.forEach(async data => {

    //     const fire = new Fire({
    //         loc: {
    //             lat: data.LATITUDE,
    //             lng: data.LONGITUDE
    //         },
    //         intensity: data.FIRE_SIZE / 50,
    //         cause: data.STAT_CAUSE_DESCR
    //     });

    //     await fire.save();
    // })


    let result = await Fire.find();

    res.send({ success: true, data: result })
})

app.get('/getUser/:id', async (req, res) => {
    console.log('req', req.params)

    let result = await User.findById(req.params.id);
    console.log('result', result)

    res.send({ success: true, data: result })
})

app.post('/updateUser', async (req, res) => {

    let result = await User.findByIdAndUpdate(req.body.id, req.body);

    res.send({ success: true, data: result })
})



//start your server on port 3001
app.listen(3001);
console.log("Backend Server Listening on port 3001");

module.exports = app;
