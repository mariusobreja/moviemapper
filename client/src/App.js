import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { Room, Star } from '@material-ui/icons';
import './App.css';

function App() {
  const [viewport, setViewport] = useState({
    width: '90vw',
    height: '80vh',
    latitude: 51.3781,
    longitude: -2.4360,
    zoom: 4
  });

  const [pins, setPins] = useState([]);
  const [currentPinId, setCurrentPinId] = useState(null);

  const getAllPins = async () => {
    try {
      const res = await axios.get('http://localhost:3001/routes/pins');
      setPins(res.data);
    } catch (e) {
      console.log(e)
    }
  }

  const handlePopupClick = (id) => {
    setCurrentPinId(id);
  }

  useEffect(() => {
    getAllPins()
  },[])

  return (
    <div className="App">
      <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapStyle='mapbox://styles/sebastiangreen/ckrnp46lb1k5r17o08zyl0eij'
    > 

    {pins.map(pin => (
    <>
    <Marker 
    latitude={pin.latitude} 
    longitude={pin.longitude} 
    offsetLeft={-20} 
    offsetTop={-10}
    >
    <Room style={{fontSize:viewport.zoom * 6,
                    color: 'lightcoral'}}
          onClick={() => handlePopupClick(pin._id)}/>
    </Marker>
    {pin._id === currentPinId && (
      <Popup
          latitude={pin.latitude}
          longitude={pin.longitude}
          closeButton={true}
          closeOnClick={false}
          anchor="bottom" >
          <div className='popup'>
            <label>Location</label>
            <h4>{pin.title}</h4>
            <label>Movie</label>
            <p>{pin.description}</p>
            <label>Rating</label>
            <div className='stars'>
              <Star className='star'/>
              <Star className='star'/>
              <Star className='star'/>
              <Star className='star'/>
              <Star className='star'/>
            </div>
            <label>Information</label>
            <span className='username'>Created by <b>{pin.username}</b></span>
            <span className='date'>{moment(pin.createdAt).fromNow()}</span>
          </div>
        </Popup>
    )}
        </>
        ))}
      </ReactMapGL>
    </div>
  );
}

export default App;
