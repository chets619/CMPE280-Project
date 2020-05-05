import React, { useState, useEffect, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import "./Home.scss";
import configs from '../../config';
import axios from "axios";
import { Map, GoogleApiWrapper, Marker, InfoWindow, Circle } from 'google-maps-react';

let Home = (props) => {
    const [data, setData] = useState([]);
    const [loc, setLoc] = useState({});
    const [state, setState] = useState({});

    useEffect(() => {
        let a = getCurrLoc();

        a.then(currLoc => {
            setLoc(currLoc);
        });

        let getData = async () => {

            try {
                let a = await axios.get(configs.connect + '/getFireData');

                if (a.data.success)
                    setData(a.data.data);
                else
                    alert(a.data.error);

            } catch (error) {
                alert(error);
            }
        }

        getData();

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


    const onMarkerClick = (props, marker, e) => {
        console.log('props, marker, e', props)
        setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }

    const onMapClicked = (props) => {
        if (state.showingInfoWindow) {
            setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };

    return (
        <div className="card home-container">
            <Map
                className="asd"
                google={props.google}
                zoom={8}
                // onClick={(t, map, c) => mapClicked(c.latLng, map)}
                initialCenter={{ lat: 47.444, lng: -122.176 }}
                center={loc}
                onClick={onMapClicked}
            >

                {
                    data.map((currData, i) => {
                        return <Marker
                            key={i}
                            name={currData.STAT_CAUSE_DESCR}
                            position={{
                                lat: currData.LATITUDE,
                                lng: currData.LONGITUDE
                            }}
                            onClick={onMarkerClick}
                            icon={require("./fire.png")}
                            data={{ ...currData }}
                        />
                    })
                }

                {
                    data.map((currData, i) => {
                        return <Circle
                            radius={Math.sqrt(currData.FIRE_SIZE)}
                            center={{
                                lat: currData.LATITUDE,
                                lng: currData.LONGITUDE
                            }}
                            strokeColor='transparent'
                            strokeOpacity={0}
                            strokeWeight={5}
                            fillColor='#FF0000'
                            fillOpacity={0.2}
                        />
                    })
                }

                <InfoWindow
                    marker={state.activeMarker}
                    visible={state.showingInfoWindow}>
                    <div>
                        <div className=""><b>Year:</b> {state.selectedPlace && state.selectedPlace.data.FIRE_YEAR}</div>
                        <div className=""><b>Cause:</b> {state.selectedPlace && state.selectedPlace.data.STAT_CAUSE_DESCR}</div>
                    </div>
                </InfoWindow>
            </Map>
        </div>
    )

}
export default GoogleApiWrapper({
    apiKey: configs.gmaps
})(Home);