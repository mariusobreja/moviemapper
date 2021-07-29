import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { Room, Star } from '@material-ui/icons';
import './App.css';
import pinDrop from './components/marker/marker';

function App() {
  const [viewport, setViewport] = useState({
    width: '90vw',
    height: '80vh',
    latitude: 51.3781,
    longitude: -2.4360,
    zoom: 4
  });

  return (
    <div className="App">
      <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapStyle='mapbox://styles/sebastiangreen/ckrnp46lb1k5r17o08zyl0eij'
    > 
    <Marker 
    latitude={30.3287} 
    longitude={35.4423} 
    offsetLeft={-20} 
    offsetTop={-10}
    >
    <Room style={{fontSize:viewport.zoom * 6,
                    color: 'lightcoral'}}/>
    </Marker>
      {/* <Popup
          latitude={30.3287}
          longitude={35.4423}
          closeButton={true}
          closeOnClick={false}
          anchor="bottom" >
          <div className='popup'>
            <label>Location</label>
            <h4>Great Temple, Petra</h4>
            <label>Movie</label>
            <p>Appeared in Indiana Jones and The Last Crusade.</p>
            <label>Rating</label>
            <div className='stars'>
              <Star className='star'/>
              <Star className='star'/>
              <Star className='star'/>
              <Star className='star'/>
              <Star className='star'/>
            </div>
            <label>Information</label>
            <span className='username'>Created by <b>Seb</b></span>
            <span className='date'>1 hour ago</span>
          </div>
        </Popup> */}
      </ReactMapGL>
    </div>
  );
}

export default App;
