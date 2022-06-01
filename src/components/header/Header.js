import React, { useState, } from 'react'

export default function Header() {
  const [score, setScore] = useState(0);
  
    return (
    <div className="header-container">
        <h1>Memory Game</h1>
        <div className="score">Score: {setScore(score+1)}</div>
        <div className="score">Best Score: </div>
        <p className="instructions">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  )
}
