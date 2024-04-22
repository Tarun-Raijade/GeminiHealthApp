import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <h1>About</h1>
            <p> When a user uploads a food image, the model employs advanced image recognition technology to detect and identify the various food items present. </p>
            <p>Additionally, it utilizes a comprehensive food database to provide detailed nutritional information, including the respective calories for each detected food item. </p>
            <p> This integrated system enables users to effortlessly track their dietary intake and make informed choices about their nutrition.</p>
        </div >
    );
}

export default About;
