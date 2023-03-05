import React from 'react';
import styles from './TarotCard.module.css';

function TarotCard(props) {
  return (
    <div>
      <img src={props.imagePath} alt={props.cardName} className={styles.image}/>
    </div>
  );
}

export default TarotCard;