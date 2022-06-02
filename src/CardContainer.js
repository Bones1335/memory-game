import React, { useState, useEffect} from 'react'
import Card from './Card';
import almonds from './images/almonds.jpg';
import orange from './images/orange.jpg';
import sushi from './images/sushi.jpg';
import kiwi from './images/kiwi.jpg';
import peaches from './images/peaches.jpg';
import spinach from './images/spinach.jpg';
import pears from './images/pears.jpg';
import artichokes from './images/artichokes.jpg';
import banana from './images/banana.jpg';
import strawberries from './images/strawberries.jpg';
import croissants from './images/croissants.jpg';
import macarons from './images/macarons.jpg';


export default function CardContainer(props) {
  const { handleGameLogic, score, highScore } = props;

  let images = [
    {
       src: almonds,
       title: 'Almonds',
       backgroundColor: 'ligh-brown',
       borderStyle: '1px solid light-brown',
    },
    {
       src: orange,
       title: 'Orange',
       backgroundColor: 'orange',
       borderStyle: '1px solid orange',
    },
    {
       src: sushi,
       title: 'Sushi',
       backgroundColor: 'seaweed',
       borderStyle: '1px solid seaweed',
    },
    {
       src: kiwi,
       title: 'Kiwi',
       backgroundColor: 'green',
       borderStyle: '1px solid green',
    },
    {
       src: peaches,
       title: 'Peaches',
       backgroundColor: 'peach',
       borderStyle: '1px solid peach',
    },
    {
       src: spinach,
       title: 'Spinach',
       backgroundColor: 'dark-green',
       borderStyle: '1px solid dark-green',
    },
    {
       src: pears,
       title: 'Pears',
       backgroundColor: 'lime-green',
       borderStyle: '1px solid lime-green',
    },
    {
       src: artichokes,
       title: 'Artichokes',
       backgroundColor: 'green',
       borderStyle: '1px solid green',
    },
    {
       src: banana,
       title: 'Banana',
       backgroundColor: 'yellow',
       borderStyle: '1px solid yellow',
    },
    {
       src: strawberries,
       title: 'Strawberries',
       backgroundColor: 'red',
       borderStyle: 'red',
    },
    {
       src: croissants,
       title: 'Croissants',
       backgroundColor: 'beige',
       borderStyle: '1px solid beige',
    },
    {
       src: macarons,
       title: 'Macarons',
       backgroundColor: 'pink',
       borderStyle: '1px solid pink',
    },
  ];

  const [cards, setNewCards] = useState(images);

  const shuffle = (newCards) => {
      for (let i=newCards.length - 1; i > 0; i--) {
          let randomIdx = Math.floor(Math.random() * i);
          [newCards[randomIdx], newCards[i]] = [newCards[i], newCards[randomIdx]];
      }
  };

  useEffect(() => {
      const newCards = [...cards];
      shuffle(newCards);
      setNewCards(newCards);
  }, [score, highScore]);
  
  return (
    <>
        {cards.map((card) => (
            <Card card={card} key={card.title} handleGameLogic={handleGameLogic} />
        ))}
    </>
  );
}
