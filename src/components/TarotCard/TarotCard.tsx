import * as React from 'react';
import styles from './TarotCard.module.css';

type TarotCardProps = {
  imagePath: string;
  cardName: string;
}

export const TarotCard = (props: TarotCardProps) => {
  return (
    <div>
      <img src={props.imagePath} alt={props.cardName} className={styles.image}/>
    </div>
  );
}

