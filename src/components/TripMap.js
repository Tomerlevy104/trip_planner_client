import React from "react";
import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";

function TripMap({ startPoint, endPoint, waypoints }) {
  const positions = [
    [startPoint.lat, startPoint.lng],
    ...waypoints
      .sort((a, b) => a.order - b.order)
      .map((wp) => [wp.lat, wp.lng]),
    [endPoint.lat, endPoint.lng]
  ];

  return (
    <MapContainer
      center={[startPoint.lat, startPoint.lng]}
      zoom={10}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {positions.map((pos, index) => (
        <Marker key={index} position={pos} />
      ))}
      <Polyline positions={positions} color="blue" />
    </MapContainer>
  );
}

export default TripMap;
