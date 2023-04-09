import * as React from 'react';
import styles from './TarotCard.module.css';
import { useDispatch } from 'react-redux';
import { showMessage, hideMessage } from '../../store/modal/modalSlice';


type TarotCardProps = {
  imagePath: string;
  cardName: string;
  isReversed?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const TarotCard = ({ imagePath, cardName, isReversed, onMouseEnter, onMouseLeave }: TarotCardProps) => {
  const imageClass = isReversed ? `${styles.image} ${styles.reversed}` : styles.image;
  const dispatch = useDispatch();

  const handleMouseEnter = () => {
    dispatch(showMessage(cardName));
    if (onMouseEnter) {
      onMouseEnter();
    }
  };

  const handleMouseLeave = () => {
    dispatch(hideMessage());
    if (onMouseLeave) {
      onMouseLeave();
    }
  };

  return (
    <div>
      <img src={imagePath} alt={cardName} className={imageClass}
        onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
    </div>
  );
}

