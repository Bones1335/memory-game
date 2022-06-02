import React from 'react'

export default function Card(props) {
    const {
        card: { src, title, backgroundColor, borderStyle },
        handleGameLogic,
    } = props;
    
    const cardStyle = {
        backgroundColor: backgroundColor,
        border: borderStyle
    }

    return (
        <button
            className="card"
            style={cardStyle}
            onClick={handleGameLogic.bind(this, title)}
        >
            <figure>
                <img src={src} alt={title} />
            </figure>
        </button>
    );
}
