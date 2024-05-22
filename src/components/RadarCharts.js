import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default icon issues in Leaflet with Webpack
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Define the custom icon
const customIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png', // Replace with the path to your custom icon
  iconSize: [25, 41], // Size of the icon
  iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
  popupAnchor: [0, -41], // Point from which the popup should open relative to the iconAnchor
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  shadowSize: [41, 41], // Size of the shadow
  shadowAnchor: [12, 41] // Point of the shadow which will correspond to marker's location
});

const LeafletMap = () => {
  // Example coordinates
  const fieldLocation = [34.365912, 35.7822856]; // Example coordinates for the field
  const myLocation = [34.366912, 35.7822856]; // Example coordinates for your location (slightly different for visibility)

  return (
    <MapContainer center={fieldLocation} zoom={100} style={{ height: "500px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={fieldLocation}>
        <Popup>
          Field Location
        </Popup>
      </Marker>
      {/* <Marker position={myLocation} icon={customIcon}>
        <Popup>
          My Location
        </Popup>
      </Marker> */}
    </MapContainer>
  );
};

export default LeafletMap;
