import './login.css'
import { Room, Close } from '@material-ui/icons'
import { useRef } from 'react';
import axios from 'axios';

export default function Login({setShowLogin, myStorage, setCurrentUser}) {
  const nameRef = useRef();
  const passRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username: nameRef.current.value,
      password: passRef.current.value
    };
    try {
      const res = await axios.post('http://localhost:3001/routes/users/login', user);
      myStorage.setItem('user', res.data.username);
      setCurrentUser(res.data.username);
      setShowLogin(false);
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className='loginContainer'>
      <div className='logo'>
        Movie Mapper
        <Room />
      </div>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='username' ref={nameRef}/>
        <input type='password' placeholder='password' ref={passRef}/>
        <button className='loginButton'>Login</button>
      </form>
      <Close className='loginClose' onClick={()=>setShowLogin(false)}/>
    </div>
  )
}