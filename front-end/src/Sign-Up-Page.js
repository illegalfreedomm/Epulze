import React from 'react';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp=()=>{
    
    const navigate=useNavigate();

    const handleSignUp=()=>{
        navigate('/front-Page');
    }

    return(
        <div>
            <label htmlFor='username'>Username</label>
            <input
                type='text'
                placeHolder='Username'
                id='username'            
            />
            <label htmlFor='password'>Password</label>
            <input
                type='text'
                placeHolder='Username'
                id='password'
            />
            <button onClick={handleSignUp}>Sign Up</button>
        </div>
    )


}

export default SignUp;