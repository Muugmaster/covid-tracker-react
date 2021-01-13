import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


const Map = ({country, lat, long, active, critical}) => {
    
    return (
    
        <MapContainer className="map" center={[lat, long]} zoom={2} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[lat, long]}>
    <Popup>
      <p>{country}</p>
      <p>Active</p>
      {active}
      <p>Critical</p>
      {critical}
    </Popup>
  </Marker>
</MapContainer>  
    )
}

export default Map
