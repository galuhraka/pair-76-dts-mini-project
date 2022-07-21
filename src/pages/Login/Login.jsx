import React, {useState, useEffect} from 'react'
import {useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import {ProfilePicture} from '../../assets/images';
import './Login.css';
import {auth} from '../../config/firebase';
 
const Login = () => {
  const [credentials, setCredentials] = useState({email: '', password: ''});
  const [
    signInWithEmailAndPassword,
    user,
    loading,
  ] = useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const inputEmailHandler = (event) => {
    setCredentials({...credentials, email: event.target.value});
  }
  const inputPasswordHandler = (event) => {
    setCredentials({...credentials, password: event.target.value});
  }
  const loginSubmitHandler = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(credentials.email, credentials.password)
  }

  useEffect(()=>{
    if(user){
      setCredentials({email: '', password: ''});
      navigate('/'); 
    }
  }, [user, navigate]);

  return (
    <div>
      <img src={ProfilePicture} alt="ProfilPicture" className='w-4/6 h-screen'/>
      <div className='container absolute right-0 top-16 w-9/12 h-screen flex flex-col'>
        <div className='w-2/3 h-full flex flex-col justify-center sm:w-full sm:pr-28'>
          <form action="" onSubmit={loginSubmitHandler}>
            <input type="email" placeholder='EMAIL' className='block w-full py-3 pl-5 bg-zinc-800 hover:bg-zinc-900 focus:bg-zinc-900 border border-solid border-slate-50 rounded text-slate-400 sm:w-2/5 sm:py-4 sm:pl-7 sm:text-lg sm:ml-auto' onChange={inputEmailHandler} value={credentials.email}/>
            <input type="password" placeholder='PASSWORD' className='block w-full py-3 pl-5 mt-1 bg-zinc-800 hover:bg-zinc-900 focus:bg-zinc-900 border border-solid border-slate-50 rounded text-slate-400 sm:w-2/5 sm:py-4 sm:pl-7 sm:mt-5 sm:text-lg sm:ml-auto' onChange={inputPasswordHandler} value={credentials.password}/>
            <button className='block w-full h-12 mt-4 bg-red-600 hover:bg-red-700 rounded text-white sm:w-2/5 sm:h-14 sm:mt-12 sm:ml-auto'>{loading? 'LOADING......' : 'L O G I N'}</button>
            <p className='text-white sm:w-2/5 sm:h-14 sm:mt-12 sm:ml-auto'>Belum Punya Akun? <span className='font-bold mx-2'><Link className='text-white' to='/register'>Sign Up</Link></span></p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;