import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './TarotCard.module.css';
import { Tooltip } from '../Tooltip/Tooltip';
import {
  showMessage,
  showTooltip,
  hideTooltip,
} from '../../store/tooltip/tooltipSlice';

type TarotCardProps = {
  imagePath: string;
  cardName: string;
  isReversed?: boolean;
};

export const TarotCard = ({
  imagePath,
  cardName,
  isReversed,
}: TarotCardProps) => {
  const imageClass = isReversed
    ? `${styles.image} ${styles.reversed}`
    : styles.image;
  const dispatch = useDispatch();

  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsTooltipVisible(true);
    dispatch(showMessage(cardName));
    dispatch(showTooltip());
  };

  const handleMouseLeave = () => {
    setIsTooltipVisible(false);
    dispatch(hideTooltip());
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={imagePath} alt={cardName} className={imageClass} />
      {isTooltipVisible && <Tooltip message={cardName} />}
    </div>
  );
};
