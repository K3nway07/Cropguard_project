// components/MapComponent.jsx
import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

// Example locations for your nodes (replace with your actual lat/lng)
const nodeLocations = [
  { id: 1, name: 'Node 1', position: { lat: 28.6139, lng: 77.209 } },  // Delhi example
  { id: 2, name: 'Node 2', position: { lat: 19.076, lng: 72.8777 } }    // Mumbai example
];

function MapComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY' // <-- Put your API key here
  });

  if (!isLoaded) return <div>Loading Map...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={nodeLocations[0].position} // Center on first node or average position
      zoom={5}
    >
      {nodeLocations.map(node => (
        <Marker key={node.id} position={node.position} label={node.name} />
      ))}
    </GoogleMap>
  );
}

export default React.memo(MapComponent);
