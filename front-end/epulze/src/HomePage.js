import React,{useState,useEffect} from 'react';
import { useNavigate} from 'react-router-dom';

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
                <h1 id="title">Welcome To Epulze</h1>

            </div>
            <div className='sec-div'>
                <h3>Login In Here !!</h3>
                {ShowLogin ? (
                    <div className='login-area'>
                    <button id="back-login" onClick={handlebackLogin}>Back</button>
                    <label htmlFor='username'></label>
                    <input
                        type='text'
                        placeholder='UserName'
                        id='username'

                        />
                    <label htmlFor='password'></label>
                    <input
                        type='text'
                        placeholder='UserName'
                        id='password'

                        />
                    </div>
            
                ):(<button onClick={handleSLogin}>LogIN</button>


                )}
                <h3>New Here register Yourself</h3>
                <button id='signup-butt' onClick={handleSignUp}>Sign Up</button>
            </div>
        </div>
    )


}

export default HomePage;