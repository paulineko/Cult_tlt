
import React, { useEffect } from 'react';
import './InteractiveMap.css';
import 'leaflet/dist/leaflet.css';
import {MapContainer, useMap, Marker, Popup} from 'react-leaflet';
import L from 'leaflet';
import MAP_PNG from '../image/Map.png';
import MAP_MARKERS from "../mock/markers";

import ICON_MUSEUM from '../image/map-markers/museum.png';
import ICON_PHILARMONY from '../image/map-markers/philarmony.png';
import ICON_THEATER from '../image/map-markers/theater.png';


const MapImage = () => {
    const map = useMap();
    const bounds = [[10, 200], [500, 500]];

    useEffect(() => {
        const image = L.imageOverlay(MAP_PNG, bounds).addTo(map);
        map.setMinZoom(2);
        map.fitBounds(image.getBounds());
        map.on('click', (e) => {
            console.log(e.latlng);
        });
    }, []);

    return null;
}

export default function InteractiveMap() {
    const getIcon = (iconType) => {
        switch (iconType) {
            case 'museum':
                return ICON_MUSEUM;
            case 'theater':
                return ICON_THEATER;
            case 'philarmony':
                return ICON_PHILARMONY;
        }
        return null;
    }

    const markers = MAP_MARKERS.map((marker, index) => {
        const markerIcon = L.icon({
            iconUrl: getIcon(marker?.type),
            iconSize: [24, 24]
        });

        return <Marker key={index} icon={markerIcon} position={{lat: marker?.lat, lng: marker?.lng}}>
            <Popup>
                {marker?.name}
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
