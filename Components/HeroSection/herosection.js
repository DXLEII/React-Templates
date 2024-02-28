import React from 'react';
import { Link } from 'react-router-dom';
import './herosection.css'


const HeroSection = ({ backgroundVideo, h1Text, pText, ctaLink, ctaButtonText }) => {
    return (
        <div className="hero-section">
            <video className="background-video" loop autoPlay muted playsInline>
                <source src={backgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="hero-content">
                <h1>{h1Text}</h1>
                <p>{pText}</p>
                <Link to={ctaLink} className="cta-button">{ctaButtonText}</Link>
            </div>
        </div>
    );
};

export default HeroSection;
