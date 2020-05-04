import React, { useState, useEffect, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import "./ReportWildfire.scss";
import configs from '../../config';
import axios from "axios";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Button from 'react-bootstrap/Button';

let ReportWildfire = (props) => {

    const [data, setData] = useState({});
    const [loc, setLoc] = useState({});

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
                navigator.geolocation.getCurrentPosition(pos => {
                    const coords = pos.coords;
                    resolve({
                        lat: coords.latitude,
                        lng: coords.longitude
                    });
                });
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
        e.preventDefault();

        try {
            let a = await axios.post(configs.connect + '/sendWildFireAlert', loc);

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

                <Button size="md" className="mt-4" onClick={e => reportWildfire(e)}>Report Wildfire</Button>
            </div>
        </Fragment>
    );

}
export default GoogleApiWrapper({
    apiKey: configs.gmaps
})(ReportWildfire);