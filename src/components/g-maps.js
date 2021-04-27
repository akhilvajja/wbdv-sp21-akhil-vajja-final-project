import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';

const my_key = process.env.MAPS_API;

const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: 42.361,
    lng: -71.057
};

const position = {
    lat: 42.361,
    lng: -71.057
}

const onLoad = marker => {
    console.log('marker: ', marker)
}

function MapComponent() {
    return (
        <LoadScript
            googleMapsApiKey={my_key}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
                <Marker
                    position={position}
                    onLoad={onLoad}
                    />
                { /* Child components, such as markers, info windows, etc. */ }
                <></>
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(MapComponent)