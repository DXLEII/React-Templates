import React, { useState } from 'react';
import './faqtile.css';

const FaqTile = ({ question, answer, imgSrc }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faqtile-container">
      <div className="faqtile-header" onClick={() => setIsOpen(!isOpen)}>
        <img src={imgSrc} alt="FAQ" className="faqtile-image" />
        <p className="faqtile-question">{question}</p>
        <span className="faqtile-dropdown-icon">{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className="faqtile-answer">{answer}</div>}
    </div>
  );
};

export default FaqTile;