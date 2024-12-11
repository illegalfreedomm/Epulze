import react from "react";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FrontPage=()=>{

    const navigate=useNavigate();

    const handleBack=()=>{
        navigate(-1);
    }

    return(

        <div>
            <button onClick={handleBack}>back</button>
            <h1>This is First Page</h1>
        </div>


    );



}

export default FrontPage;