// import './popup.css';
// import { Popup } from 'react-map-gl';

// export default function newPopup({handleSubmit,newPin,setNewPin,setMovie,setLocation,setRating}) {

// return (
//   <Popup
//           latitude={newPin.latitude}
//           longitude={newPin.longitude}
//           closeButton={true}
//           closeOnClick={false}
//           anchor="bottom"
//           onClose={()=>setNewPin(null)}
//           >
//             <div>
//               <form onSubmit={handleSubmit}>
//                 <label>Location</label>
//                 <input placeholder='Enter a location' onChange={(e)=>setLocation(e.target.value)}/>
//                 <label>Movie</label>
//                 <textarea placeholder='This place appeared in...' onChange={(e)=>setMovie(e.target.value)}/>
//                 <label>Rating</label>
//                 <select onChange={(e)=>setRating(e.target.value)}>
//                   <option value='1'>1</option>
//                   <option value='2'>2</option>
//                   <option value='3'>3</option>
//                   <option value='4'>4</option>
//                   <option value='5'>5</option>
//                 </select>
//                 {/* <label>Information</label>
//                 <label>Upload image</label>
//                 <input type='file'></input>*/}
//                 <button className='submitButton' type='submit'>Add Pin</button>
//               </form>
//             </div>
//         </Popup>

// )
  
// }