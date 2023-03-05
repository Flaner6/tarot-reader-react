import React from 'react';
import TarotCard from './components/TarotCard';
import styles from './App.module.css'

const cardImages = {
  'The Fool': '/images/The Fool.jpg',
  'The Magician': '/images/The Magician.jpg',
  'The High Priestess': '/images/The High Priestess.jpg',
  'The Empress': '/images/The Empress.jpg',
  'The Emperor': '/images/The Emperor.jpg',
  'The Hierophant': '/images/The Hierophant.jpg',
  'The Lovers': '/images/The Lovers.jpg',
  'The Chariot': '/images/The Chariot.jpg',
  'Strength': '/images/Strength.jpg',
  'The Hermit': '/images/The Hermit.jpg',
  'Wheel of Fortune': '/images/Wheel of Fortune.jpg',
  'Justice': '/images/Justice.jpg',
  'The Hanged Man': '/images/The Hanged Man.jpg',
  'Death': '/images/Death.jpg',
  'Temperance': '/images/Temperance.jpg',
  'The Devil': '/images/The Devil.jpg',
  'The Tower': '/images/The Tower.jpg',
  'The Star': '/images/The Star.jpg',
  'The Moon': '/images/The Moon.jpg',
  'The Sun': '/images/The Sun.jpg',
  'Judgement': '/images/Judgement.jpg',
  'The World': '/images/The World.jpg',
};
function App() {
  const cardNames = Object.keys(cardImages);
  const randomCardNames = [];
  while (randomCardNames.length < 10) {
    const randomIndex = Math.floor(Math.random() * cardNames.length);
    const randomCardName = cardNames[randomIndex];
    if (!randomCardNames.includes(randomCardName)) {
      randomCardNames.push(randomCardName);
    }
  }

  const centerCardName = randomCardNames[0];
  const centerCardImagePath = cardImages[centerCardName];
  const centerCard = <TarotCard imagePath={centerCardImagePath} cardName={centerCardName} key={centerCardName} />;

  const topCardName = randomCardNames[1];
  const topCardImagePath = cardImages[topCardName];
  const topCard = <TarotCard imagePath={topCardImagePath} cardName={topCardName} key={topCardName} />;

  const rightCardName = randomCardNames[2];
  const rightCardImagePath = cardImages[rightCardName];
  const rightCard = <TarotCard imagePath={rightCardImagePath} cardName={rightCardName} key={rightCardName}  />;

  const bottomCardName = randomCardNames[3];
  const bottomCardImagePath = cardImages[bottomCardName];
  const bottomCard = <TarotCard imagePath={bottomCardImagePath} cardName={bottomCardName} key={bottomCardName}  />;

  const leftCardName = randomCardNames[4];
  const leftCardImagePath = cardImages[leftCardName];
  const leftCard = <TarotCard imagePath={leftCardImagePath} cardName={leftCardName} key={leftCardName} />;

  const centerTopCardName = randomCardNames[5];
  const centerTopCardPath = cardImages[centerTopCardName];
  const centerTopCard = <TarotCard imagePath={centerTopCardPath} cardName={centerTopCardName} key={centerTopCardName}  />;

  const topLeftCardName = randomCardNames[6];
  const topLeftCardImagePath = cardImages[topLeftCardName];
  const position10Card = <TarotCard imagePath={topLeftCardImagePath} cardName={topLeftCardName} key={topLeftCardName}  />;

  const bottomRightCardName = randomCardNames[7];
  const bottomRightCardImagePath = cardImages[bottomRightCardName];
  const position9Card = <TarotCard imagePath={bottomRightCardImagePath} cardName={bottomRightCardName} key={bottomRightCardName}  />;

    const bottomLeftCardName = randomCardNames[8];
    const bottomLeftCardImagePath = cardImages[bottomLeftCardName];
    const position8Card = <TarotCard imagePath={bottomLeftCardImagePath} cardName={bottomLeftCardName} key={bottomLeftCardName} />;
    
    const aboveCenterCardName = randomCardNames[9];
    const aboveCenterCardImagePath = cardImages[aboveCenterCardName];
    const position7Card = <TarotCard imagePath={aboveCenterCardImagePath} cardName={aboveCenterCardName} key={aboveCenterCardName}  />;
    
    return (
    <div className={styles.celticCross}>
      <div>
        <div className={styles.centerCard}>
        {centerCard}
        </div>
        <div className={styles.centerTopCard}>
        {centerTopCard}
        </div>
        <div className={styles.topCard}>
        {topCard}
        </div>
        <div className={styles.rightCard}>
        {rightCard}
        </div>
        <div className={styles.bottomCard}>
        {bottomCard}
        </div>
        <div className={styles.leftCard}>
        {leftCard}
        </div>
      </div>
      <div className={styles.bodyCards}>
        <div className={styles.position10Card}>
        {position10Card}
        </div>
        <div className={styles.position9Card}>
        {position9Card}
        </div>
        <div className={styles.position8Card}>
        {position8Card}
        </div>
        <div className={styles.position7Card}>
        {position7Card}
        </div>
      </div>
    </div>
    );
    }
    
    export default App;