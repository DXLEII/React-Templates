import React from 'react';
import './styles/timelinecomponent.css';

const TimelineComponent = ({ nodes }) => {
    return (
        <div className="timeline-container">
            {nodes.map((node, index) => (
                <div className={`timeline-node ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
                    <div className="timeline-content">
                        <h3>{node.title}</h3>
                        <ul>
                            {node.items.map((item, itemIndex) => (
                                <li key={itemIndex}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TimelineComponent;