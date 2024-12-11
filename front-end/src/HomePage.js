import React,{useState,useEffect} from 'react';
import { useNavigate,Link} from 'react-router-dom';
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
            <div className='navigator'>
                <nav className='nav-0'>
                    <button id='back-butt'>Back</button>
                    <Link to='' id='nav-links'>Home</Link>
                    <Link to='' id='nav-links'>Menu</Link>
                    <Link to='' id='nav-links'>Sign In</Link>
                </nav>
            </div>
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
            <img id='tourn-img' src='https://i.ytimg.com/vi/ETV5KE-ARoE/maxresdefault.jpg'/>
            <div className='third-div'>
                <h3>New Here register Yourself</h3>
                <button id='signup-butt' onClick={handleSignUp}>→ Sign Up</button>
            </div>
        </div>
    )


}

export default HomePage;