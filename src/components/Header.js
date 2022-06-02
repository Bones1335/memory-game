import React from 'react'

export default function Header(props) {
  const { score, highScore } = props;
  
    return (
    <div className="header-container">
        <h1>Memory Game</h1>
        <div className="score">Score: {score}</div>
        <div className="score">High Score: {highScore}</div>
        <p className="instructions">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  )
}
