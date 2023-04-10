import * as React from 'react';
import styles from './TarotCard.module.css';
import { useDispatch } from 'react-redux';
import { showMessage, showModal, hideModal } from '../../store/modal/modalSlice';

type TarotCardProps = {
  imagePath: string;
  cardName: string;
  isReversed?: boolean;
};

export const TarotCard = ({ imagePath, cardName, isReversed }: TarotCardProps) => {
  const imageClass = isReversed ? `${styles.image} ${styles.reversed}` : styles.image;
  const dispatch = useDispatch();
  let timeout: NodeJS.Timeout;

  const handleMouseOver = () => {
    dispatch(showMessage(cardName));
    console.log('entered');
    dispatch(showModal());
  };

  const handleMouseOut = () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      dispatch(hideModal());
    }, 500);
  };

  return (
    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <img src={imagePath} alt={cardName} className={imageClass} />
    </div>
  );
};
