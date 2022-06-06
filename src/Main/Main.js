import React from 'react';
import backgroundImg from '../background.png';
import './Main.css';
import ZodiacCard from '../ZodiacCard/ZodiacCard.js';

export default function Main({ zodiacs }) {
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}>
      {
        zodiacs.map((zodiac, i) => 
          <ZodiacCard {...zodiac}
            key={zodiac.name + i} />)
      }
    </main>
  );
}