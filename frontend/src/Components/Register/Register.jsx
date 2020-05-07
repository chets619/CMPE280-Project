import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "./Register.scss";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import configs from '../../config';
import axios from "axios";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

let Register = (props) => {
    const { match } = props;
    const [data, setData] = useState({});
    const [loc, setLoc] = useState({});

    useEffect(() => {
        if (match.params.id) {
            axios.get(configs.connect + '/getUser/' + match.params.id).then(response => {
                console.log('response', response.data)
                if (response.data.success) {
                    setLoc(response.data.data.loc);
                    setData({
                        ...data,
                        name: response.data.data.name,
                        email: response.data.data.email,
                        city: response.data.data.city,
                        phone: response.data.data.phone,
                        loc: response.data.data.loc
                    });
                }
            });
        } else {
            let a = getCurrLoc();

            a.then(currLoc => {
                setLoc(currLoc);
                setData({
                    ...data,
                    loc: JSON.parse(JSON.stringify(currLoc))
                })
            })
        }
    }, []);

    const getCurrLoc = () => {
        if (navigator && navigator.geolocation) {
            return new Promise((resolve, reject) => {
                // navigator.geolocation.getCurrentPosition(pos => {
                //     const coords = pos.coords;
                //     resolve({
                //         lat: coords.latitude,
                //         lng: coords.longitude
                //     });
                // });

                axios.post("https://www.googleapis.com/geolocation/v1/geolocate?key=" + configs.gmaps).then(data => {
                    const coords = data.data.location;
                    console.log(data);
                    resolve({
                        lat: coords.lat,
                        lng: coords.lng
                    });
                })
            });
        }
        return {
            lat: 0,
            lng: 0
        };
    }


    const registerUser = async (e) => {
        e.preventDefault();

        if (data.pw != data.pw2) {
            alert("Passwords do not match!");
            return;
        }

        let reqData = { ...data };
        delete reqData.pw2;

        try {
            let a = await axios.post(configs.connect + '/register', reqData);

            if (a.data.success)
                alert("Successfully Registered!");
            else
                alert(a.data.error);

        } catch (error) {
            alert(error);
        }
    }

    const updateUser = async (e) => {
        e.preventDefault();

        console.log(data);

        try {
            let a = await axios.post(configs.connect + '/updateUser', { id: match.params.id, ...data });

            if (a.data.success)
                alert("Successfully Updated!");
            else
                alert(a.data.error);

        } catch (error) {
            alert(error);
        }
    }

    const mapStyles = {
    };

    const mapClicked = (location, map) => {
        console.log('location', JSON.parse(JSON.stringify(location)))
        setLoc(location);
        setData({
            ...data,
            loc: JSON.parse(JSON.stringify(location))
        });
        map.panTo(location);
    }

    return (
        <div className="login-container border border-info col-sm-12 m-auto p-4">
            <center><h2 className="">{
                match.params.id ? "Update Profile" : "Register"}</h2></center>

            <div className="row mt-4">
                <div className="col-md-6 border-right">
                    <Form className="p-5" onSubmit={e => match.params.id ? updateUser(e) : registerUser(e)}>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" name="name" value={data.name} onChange={e => setData({ ...data, [e.target.name]: e.target.value })} required />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" value={data.email} onChange={e => setData({ ...data, [e.target.name]: e.target.value })} required />
                        </Form.Group>

                        {
                            match.params.id ? "" : <><Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="pw" onChange={e => setData({ ...data, [e.target.name]: e.target.value })} required />
                            </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password" placeholder="Confirm Password" name="pw2" onChange={e => setData({ ...data, [e.target.name]: e.target.value })} required />
                                </Form.Group>
                            </>
                        }


                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="City" name="city" value={data.city} onChange={e => setData({ ...data, [e.target.name]: e.target.value })} required />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="number" placeholder="Phone Number" value={data.phone} name="phone" onChange={e => setData({ ...data, [e.target.name]: e.target.value })} required />
                        </Form.Group>


                        <Button variant="primary" type="submit" className="mt-3">
                            {match.params.id ? "Update" : "Submit"}
                        </Button>
                    </Form>
                </div>
                <div className="col-md-6">
                    <center><h3>Mark co-ordinates for getting fire updates!</h3></center>
                    <Map
                        className="asd"
                        google={props.google}
                        zoom={8}
                        style={mapStyles}
                        onClick={(t, map, c) => mapClicked(c.latLng, map)}
                        initialCenter={{ lat: 47.444, lng: -122.176 }}
                        center={loc}
                    >
                        <Marker
                            name={'Location'}
                            position={loc} />
                    </Map>
                </div>
            </div>

        </div>
    )

}
export default GoogleApiWrapper({
    apiKey: configs.gmaps
})(Register);