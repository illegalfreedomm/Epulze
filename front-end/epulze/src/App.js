import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import SignUp from './Sign-Up-Page';

const App=()=>{

        return(
          <Router>
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/Sign-up" element={<SignUp/>}/>
            </Routes>
          </Router>
        )


}


export default App;
