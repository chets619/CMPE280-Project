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

                if (a.data.success) {
                    console.log('a.data.data', a.data)
                    setData(a.data.data);
                }
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

    const onCenterMoved = (props, map) => {
        const coords = JSON.parse(JSON.stringify(map.getCenter()));

        axios.get('https://api.breezometer.com/fires/v1/current-conditions?lat=' + coords.lat + '&lon=' + coords.lng + '&key=' + configs.apiFireKey + '&radius=100').then(res => {
            console.log('res', res.data)
            const fires = res.data.data.fires;

            if (fires.length)
                fires.forEach(fire => {
                    let obj = {
                        loc: {
                            lat: fire.position.lat,
                            lng: fire.position.lon
                        },
                        intensity: fire.position.distance.value * 100,
                        cause: "Unknown",
                        date: fire.update_time
                    };

                    axios.post(configs.connect + "/addFireData", obj).then(successRes => {
                        console.log('successRes', successRes)

                        setData([...data, successRes.data.result]);
                    })
                });

        })

    };

    return (
        <div className="card home-container">
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">Welcome to our Wildfire App!</h1>
                    <p class="lead">Below mapped are the details for various fires in your area! Register to stay get updates in real time about fires in your area! </p>
                </div>
            </div>
            <Map
                className="asd"
                google={props.google}
                zoom={8}
                onDragend={onCenterMoved}
                // onClick={(t, map, c) => mapClicked(c.latLng, map)}
                initialCenter={{ lat: 47.444, lng: -122.176 }}
                center={loc}
                onClick={onMapClicked}
            >

                {
                    data.map((currData, i) => {
                        return <Marker
                            key={i}
                            name={currData.cause}
                            position={{
                                lat: currData.loc && currData.loc.lat || 0,
                                lng: currData.loc && currData.loc.lng || 0
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
                            radius={+currData.intensity}
                            center={{
                                lat: currData.loc && currData.loc.lat || 0,
                                lng: currData.loc && currData.loc.lng || 0
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
                        <div className=""><b>Year:</b> {state.selectedPlace && new Date(state.selectedPlace.data.date).getFullYear()}</div>
                        <div className=""><b>Cause:</b> {state.selectedPlace && state.selectedPlace.data.cause}</div>
                    </div>
                </InfoWindow>
            </Map>
        </div>
    )

}
export default GoogleApiWrapper({
    apiKey: configs.gmaps
})(Home);