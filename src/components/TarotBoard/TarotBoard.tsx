import React, { useState } from 'react';
import { TarotCard } from '../TarotCard/TarotCard';
import { StartButton } from '../UserPrompt/UserPrompt'
import styles from './TarotBoard.module.css';
import  { cardImages }  from '../AllCards';


export const TarotBoard = () => {
  const randomCardNames = Object.keys(cardImages)
    .sort(() => Math.random() - 0.5)
    .slice(0, 10);


  const [name, setName] = useState('');

  const handleButtonClick = (name: string) => {
    setName(name);
  }


  const crossSectionPositions = [
    { className: styles.centerCard, index: 0 },
    { className: styles.centerTopCard, index: 1 },
    { className: styles.topCard, index: 4 },
    { className: styles.rightCard, index: 2 },
    { className: styles.bottomCard, index: 5 },
    { className: styles.leftCard, index: 3 },
  ];

  const bodyPositions = [
    { className: styles.position10Card, index: 9 },
    { className: styles.position9Card, index: 8 },
    { className: styles.position8Card, index: 7 },
    { className: styles.position7Card, index: 6 },
  ];

  const crossSection = crossSectionPositions.map((position) => {
    const cardName = randomCardNames[position.index];
    const imagePath = cardImages[cardName];
    const isReversed = Math.random() < 0.5;
    return (
      <div className={position.className} key={cardName}>
        <TarotCard imagePath={imagePath} cardName={cardName} isReversed={isReversed} />
      </div>
    );
  });

  const bodyCards = bodyPositions.map((position) => {
    const cardName = randomCardNames[position.index];
    const imagePath = cardImages[cardName];
    const isReversed = Math.random() < 0.5;
    return (
      <div className={position.className} key={cardName}>
        <TarotCard imagePath={imagePath} cardName={cardName} isReversed={isReversed} />
      </div>
    );
  });

  return (
    <div>
      {!name && <StartButton onButtonClick={handleButtonClick} />}
      {name && (
        <div className={styles.celticCross}>
          <div>
            {crossSection}
          </div>
          <div className={styles.bodyCards}>
            {bodyCards}
          </div>
        </div>
      )}
    </div>
  );
};