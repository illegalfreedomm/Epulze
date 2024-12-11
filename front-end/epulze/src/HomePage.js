import React,{useState,useEffect} from 'react';
import { useNavigate} from 'react-router-dom';

const HomePage=()=>{
    const {ShowLogin,setShowLogin}

    const navigate=useNavigate();

    const handleSignUp=()=>{
        navigate('Sign-up');
    }

    return(
        <div className='main-page'>
            <div className='first-div'>
                <h1 id="title">Welcome To Epulze</h1>

            </div>
            <div className='sec-div'>
                <h3>Login In Here !!</h3>
                <button id='login-butt' >LOGIN IN</button>
                <h3>New Here register Yourself</h3>
                <button id='signup-butt' onClick={handleSignUp}>Sign Up</button>
            </div>
        </div>
    )


}

export default HomePage;