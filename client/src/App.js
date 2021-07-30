import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { Room, Star } from '@material-ui/icons';
import './App.css';

function App() {
  const currentUser = 'Seb';
  const [viewport, setViewport] = useState({
    width: '90vw',
    height: '80vh',
    latitude: 51.3781,
    longitude: 1.4360,
    zoom: 5
  });

  const [pins, setPins] = useState([]);
  const [currentPinId, setCurrentPinId] = useState(null);
  const [newPin, setNewPin] = useState(null);
  const [location, setLocation] = useState(null);
  const [movie, setMovie] = useState(null);
  const [rating, setRating] = useState(0);

  const getAllPins = async () => {
    try {
      const res = await axios.get('http://localhost:3001/routes/pins');
      setPins(res.data);
    } catch (e) {
      console.log(e)
    }
  }

  const handlePopupClick = (id, lat, long) => {
    setCurrentPinId(id);
    setViewport({...viewport, latitude: lat, longitude: long})
  };

  const handlePinClick = (e) => {
    const [longitude,latitude] = e.lngLat;
    setNewPin({
      latitude,
      longitude
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEntry = {
      username: currentUser,
      title: location,
      description: movie,
      rating,
      latitude: newPin.latitude,
      longitude: newPin.longitude,
    };
    try {
      const res = await axios.post('http://localhost:3001/routes/pins', newEntry);
      setPins([...pins, res.data]);
      setNewPin(null);
    } catch (e) {
      console.log(e, 'error here')
    }
  }

  useEffect(() => {
    getAllPins()
  },[])

  return (
    <div className="App">
      <h1 className='movieMapper'>Movie Mapper<Room className='titleLogo' style={{fontSize:36.2}}></Room></h1>
      <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapStyle='mapbox://styles/sebastiangreen/ckrnp8ur54xux17mswwup4dhk'
      onDblClick={handlePinClick}
    > 

    {pins.map(pin => (
    <>
    <Marker
    latitude={pin.latitude} 
    longitude={pin.longitude} 
    offsetLeft={-viewport.zoom * 3} 
    offsetTop={-viewport.zoom * 6}
    >
    <Room style={{fontSize:viewport.zoom * 6,
                  color: pin.username === currentUser ? 'lightcoral' : '#8b95c9',
                  cursor: 'pointer'}}
                  onClick={() => handlePopupClick(pin._id, pin.latitude, pin.longitude)}/>
    </Marker>
    {pin._id === currentPinId && (
      <Popup
          latitude={pin.latitude}
          longitude={pin.longitude}
          closeButton={true}
          closeOnClick={false}
          anchor="bottom"
          onClose={()=>setCurrentPinId(null)}
          >
          <div className='popup'>
            <label>Location</label>
            <h4>{pin.title}</h4>
            <label>Movie</label>
            <p>{pin.description}</p>
            <label>Rating</label>
            <div className='stars'>
              {Array(pin.rating).fill(<Star className='star' />)}
            </div>
            <label>Information</label>
            <span className='username'>Created by <b>{pin.username}</b></span>
            <span className='date'>{moment(pin.createdAt).fromNow()}</span>
          </div>
        </Popup>
    )}
        </>
        ))}
        {newPin && (
        <Popup
          latitude={newPin.latitude}
          longitude={newPin.longitude}
          closeButton={true}
          closeOnClick={false}
          anchor="bottom"
          onClose={()=>setNewPin(null)}
          >
            <div>
              <form onSubmit={handleSubmit}>
                <label>Location</label>
                <input placeholder='Enter a location' onChange={(e)=>setLocation(e.target.value)}/>
                <label>Movie</label>
                <textarea placeholder='This place appeared in...' onChange={(e)=>setMovie(e.target.value)}/>
                <label>Rating</label>
                <select onChange={(e)=>setRating(e.target.value)}>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                </select>
                {/* <label>Information</label> */}
                {/* <label>Upload image</label>
                <input type='file'></input> */}
                <button className='submitButton' type='submit'>Add Pin</button>
              </form>
            </div>
        </Popup>
        )}
      </ReactMapGL>
    </div>
  );
}

export default App;
