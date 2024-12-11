import React from 'react';
import { useState,useEffect } from 'react';

const SignUp=()=>{
    
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
        </div>
    )


}

export default SignUp;