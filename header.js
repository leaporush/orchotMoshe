import React from "react";
import { useState } from "react";
import "./header.css";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import logo from "./logoFinal.png";
import studentsData from "./data.json";
import App from "./App";
import HomePage from "./home.js";
import { Link } from 'react-router-dom';



const OMHeader = () => {

    const [redirectToApp, setRedirectToApp] = useState(false);


    const handleRedirectToApp = () => {
        setRedirectToApp(true);
    };

    if (redirectToApp) {
        <Link to='/' className="cool-button">למתרימים</Link>

        return <HomePage />;
    }

    return (
        <div className="headerImg">
            <div className="logo">
                <img src={logo} alt="logo" />
                {/* <button className="cool-button" onClick={handleRedirectToApp}>לעמוד הבית</button> */}
               
            </div>
            <Link to='/' className="cool-button-header">לעמוד הבית</Link>
           
        </div>
    );
};

export default OMHeader;
