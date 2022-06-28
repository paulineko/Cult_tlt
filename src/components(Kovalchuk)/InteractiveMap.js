
import React, { useEffect } from 'react';
import './InteractiveMap.css';
import 'leaflet/dist/leaflet.css';
import {MapContainer, ImageOverlay, useMap, Marker, Popup} from 'react-leaflet';
import L from 'leaflet';
import MAP_PNG from '../image/Map.png';

const MapImage = () => {
    const map = useMap();
    const bounds = [[10, 200], [500, 500]];

    useEffect(() => {
        const image = L.imageOverlay(MAP_PNG, bounds).addTo(map);
        map.fitBounds(image.getBounds());
        map.setMinZoom(2);
        map.on('click', (e) => {
            console.log(e.latlng);
        });
    }, []);

    return null;
}

export default function InteractiveMap() {
    const markers = [
        {
            name: 'Hi World',
            lat: 74.90997533716637,
            lng: 331.28318157186027
        }
    ].map((marker) => {
        return <Marker position={{lat: marker.lat, lng: marker.lng}}>
            <Popup>
                {marker.name}
            </Popup>
        </Marker>;
    });

    return (
        <MapContainer center={[0, 0]} zoom={0} scrollWheelZoom={true}>
            <MapImage/>
            {markers}
        </MapContainer>
    );
}
