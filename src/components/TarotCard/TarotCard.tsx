import * as React from 'react';
import styles from './TarotCard.module.css';

type TarotCardProps = {
  imagePath: string;
  cardName: string;
  isReversed?: boolean;
}

export const TarotCard = ({ imagePath, cardName, isReversed }: TarotCardProps) => {
  const imageClass = isReversed ? `${styles.image} ${styles.reversed}` : styles.image;

  return (
    <div>
      <img src={imagePath} alt={cardName} className={imageClass}/>
    </div>
  );
}
