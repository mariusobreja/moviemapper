import React from 'react';
import './pin.css';
import Marker from 'react-map-gl';

export default function dropPin(pins) {
  return 
  (
  <Marker 
    latitude={pin.latitude} 
    longitude={pin.longitude} 
    offsetLeft={-20} 
    offsetTop={-10}
    >
    <Room style={{fontSize:viewport.zoom * 6,
                  color: pin.username === currentUser ? 'lightcoral' : 'lime',
                  cursor: 'pointer'}}
          onClick={() => handlePopupClick(pin._id, pin.latitude, pin.longitude)}/>
    </Marker>)
}