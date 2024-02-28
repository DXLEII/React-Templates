import React from 'react';
import './testimonialtile.css';

const TestimonialTile = ({ headshot, name, stars, testimonial }) => {
    return (
        <div className="testimonial-tile">
            <img src={headshot} alt={name} className="headshot" />
            <div className="testimonial-info">
                <h3 className="client-name">{name}</h3>
                <div className="star-rating">
                    {[...Array(5)].map((_, i) => (
                        <span key={i} className={`star ${i < stars ? "filled" : ""}`}>★</span>
                    ))}
                </div>
                <p className="testimonial-text">{testimonial}</p>
            </div>
        </div>
    );
};

export default TestimonialTile;
