import React,{useState,useEffect} from 'react';
import { useNavigate} from 'react-router-dom';
import './HomePage.css';

const HomePage=()=>{
    const [ShowLogin,setshowLogin]=useState(false);

    const navigate=useNavigate();

    const handleSignUp=()=>{
        navigate('Sign-up');
    }

    const handleSLogin=()=>{
        setshowLogin(true);
    }

    const handlebackLogin=()=>{
        setshowLogin(false);
    }

    return(
        <div className='main-page'>
            <div className='first-div'>
                <h1 id="title">Welcome To EPuLzE</h1>
                

            </div>
            <div className='sec-div'>
                <h3>Login In Here !!</h3>
                {ShowLogin ? (
                    <div className='login-area'>
                    <button id="back-login" onClick={handlebackLogin}>Back</button>
                    <h1 id='login-title'>LOGIN</h1>
                    <input
                        type='text'
                        placeholder='UserName'
                        id='username'

                        />
                    
                    <input
                        type='text'
                        placeholder='Password'
                        id='password'

                        />
                    <button id='login-butt'>Login</button>
                    </div>
                    
            
                ):(<button id='login-show-butt' onClick={handleSLogin}>→ LogIN</button>


                )}

            </div>
            <div className='third-div'>
                <h3>New Here register Yourself</h3>
                <button id='signup-butt' onClick={handleSignUp}>→ Sign Up</button>
            </div>
        </div>
    )


}

export default HomePage;