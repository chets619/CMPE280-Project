const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    email: { type: String, required: true },
    pw: { type: String, required: true },
    name: { type: String, required: true },
    phone: { type: String, required: false },
    city: { type: String, required: false },
    state: { type: String, required: false },
    country: { type: String, required: false },
    loc: {
        lat: { type: Number },
        lng: { type: Number }
    }

}, {
    versionKey: false
});

userSchema.methods.toJSON = function () {
    var obj = this.toObject();
    delete obj.pw;
    delete obj._id;
    return obj;
}

module.exports = mongoose.model('user', userSchema);
