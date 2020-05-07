import React, { useState, useEffect, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import "./ReportWildfire.scss";
import configs from '../../config';
import axios from "axios";
import { Map, GoogleApiWrapper, Marker, Circle } from 'google-maps-react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

let ReportWildfire = (props) => {

    const [data, setData] = useState({});
    const [loc, setLoc] = useState({});
    const [intensity, setIntensity] = useState(0);
    const [cause, setCause] = useState("");

    useEffect(() => {
        let a = getCurrLoc();

        a.then(currLoc => {
            setLoc(currLoc);
            setData({
                ...data,
                loc: JSON.parse(JSON.stringify(currLoc))
            })
        })
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

    const mapStyles = {
    };

    const mapClicked = (location, map) => {
        console.log('location', JSON.parse(JSON.stringify(location)))
        setLoc(location);
        map.panTo(location);
    }

    const reportWildfire = async (e) => {
        let data = {
            loc: JSON.parse(JSON.stringify(loc)),
            intensity, cause
        }
        e.preventDefault();

        try {
            let a = await axios.post(configs.connect + '/sendWildFireAlert', data);

            if (a.data.success)
                alert("Alerts sent successfully!");
            else
                alert(a.data.error);

        } catch (error) {
            alert(error);
        }
    }

    return (
        <Fragment>
            <div className="container card p-3">
                <center><h3>Mark Coords for wildfire reporting</h3></center>
                <Form onSubmit={reportWildfire}>
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

                        <Circle
                            radius={+intensity}
                            center={loc}
                            strokeColor='transparent'
                            strokeOpacity={0}
                            strokeWeight={5}
                            fillColor='#FF0000'
                            fillOpacity={0.2}
                        />
                    </Map>

                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Fire Intensity</Form.Label>
                        <Form.Control type="number" placeholder="Radius in meters" required onChange={e => setIntensity(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlInput2">
                        <Form.Label>Cause of Fire</Form.Label>
                        <Form.Control type="text" placeholder="Cause" required onChange={e => setCause(e.target.value)} />
                    </Form.Group>

                    <Button size="md" type="submit" className="mt-4">Report Wildfire</Button>
                </Form>
            </div>
        </Fragment>
    );

}
export default GoogleApiWrapper({
    apiKey: configs.gmaps
})(ReportWildfire);