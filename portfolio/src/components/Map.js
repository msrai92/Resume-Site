import React, { Fragment } from 'react';
import { Marker, LoadScript, GoogleMap, useJsApiLoader, useLoadScript } from '@react-google-maps/api';
import mapStyles from '../util/MapStyles';


const containerStyle = {
    width: '100%',
    height: '100%'
};
const options = {
    styles: mapStyles,
    streetViewControl: false,
    scaleControl: false,
    mapTypeControl: false,
    panControl: false,
    zoomControl: false,
    rotateControl: false,
    fullscreenControl: false
}

const center = {
    lat: 29.7604,
    lng: -95.3698
};
const position = {
    lat: 29.7604,
    lng: -95.3698
}

const Map = () => {
    return (
        <Fragment>
            <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_KEY}>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={9}
                    options={options}
                >
                    <Marker position={position} />
                </GoogleMap>
            </LoadScript>
        </Fragment>
    )
}


export default Map;
