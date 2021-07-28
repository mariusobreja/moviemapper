import { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { Room } from '@material-ui/icons';
import './App.css';

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
    >
      <Marker 
        latitude={51.4701} 
        longitude={-0.9700} 
        offsetLeft={-20} 
        offsetTop={-10}
      >
      <Room style={{fontSize:viewport.zoom * 6,
                    color: 'lightcoral'}}/>
      </Marker>
      </ReactMapGL>
    </div>
  );
}

export default App;
