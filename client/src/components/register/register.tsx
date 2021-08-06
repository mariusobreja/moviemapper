import './register.css'
import { Room, Close } from '@material-ui/icons'
import { useRef, useState } from 'react';
import axios from 'axios';

export default function Register({setShowRegister} : {setShowRegister: Function}) {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passRef = useRef(null);

  const handleSubmit = async (e: {preventDefault: Function }) => {
    e.preventDefault();
    const newUser = {
      username: nameRef.current.value,
      email: emailRef.current.value,
      password: passRef.current.value
    };
    try {
      await axios.post('http://localhost:3001/routes/users/register', newUser)
      setError(false);
      setSuccess(true);
    } catch (e) {
      console.log(e)
      setError(true);
      setSuccess(false);
    }
  }

  return (
    <div className='registerContainer'>
      <div className='logo'>
        Movie Mapper
        <Room />
      </div>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='username' ref={nameRef}/>
        <input type='email' placeholder='email' ref={emailRef}/>
        <input type='password' placeholder='password' ref={passRef}/>
        <button className='registerButton'>Register</button>
        {success &&
        <span className='success'>User successfully created, you may log in!</span>
      }
        {error &&
        <span className='failure'>Something went wrong!</span>
        }
      </form>
      <Close className='registerClose' onClick={()=>setShowRegister(false)}/>
    </div>
  )
}