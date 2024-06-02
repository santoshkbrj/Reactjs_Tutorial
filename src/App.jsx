import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const API_URL = 'https://your-api.com/coordinates'; // replace with your API URL

function App() {
    const [coordinates, setCoordinates] = useState([]);
    const [filteredCoordinates, setFilteredCoordinates] = useState([]);
    const [map, setMap] = useState(null);

    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => setCoordinates(data.coordinates));
    }, []);

    const handleMapClick = (event) => {
        const latLng = event.latLng;
        const lat = latLng.lat();
        const lng = latLng.lng();

        // Get coordinates from Google Maps
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ location: { lat, lng } }, (results, status) => {
            if (status === 'OK') {
                const googleMapsCoordinate = results[0].geometry.location;

                // Filter API coordinates that match the Google Maps coordinate
                const filteredCoords = coordinates.filter((coord) => {
                    return (
                        coord.latitude === googleMapsCoordinate.lat() &&
                        coord.longitude === googleMapsCoordinate.lng()
                    );
                });

                setFilteredCoordinates(filteredCoords);
            } else {
                console.error('Geocode failed:', status);
            }
        });
    };

    return (
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
                center={{ lat: 40.7128, lng: -74.0060 }}
                zoom={13}
                onClick={handleMapClick}
                ref={(map) => setMap(map)}
            >
                {filteredCoordinates.map((coord, index) => (
                    <div key={index}>
                        <h5>Matched Coordinate:</h5>
                        <p>Latitude: {coord.latitude}</p>
                        <p>Longitude: {coord.longitude}</p>
                    </div>
                ))}
            </GoogleMap>
        </LoadScript>
    );
}

export default App;