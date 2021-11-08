import dogBanner from "../images/dogbanner.jpeg";
import React from 'react';

const Landing = () => {
    return (
        <div>
            <p className="landing-page">Welcome to Pawprint!</p>
            <img src={dogBanner} />
        </div>
    );
};

export default Landing;