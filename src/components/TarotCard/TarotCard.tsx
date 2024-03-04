import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './TarotCard.module.css';
import { Tooltip } from '../Tooltip/Tooltip';
import { setCardName } from '../../store/tooltip/tooltipSlice';

type TarotCardProps = {
  imagePath: string;
  name: string;
  isReversed?: boolean;
};

export const TarotCard = ({ imagePath, name, isReversed }: TarotCardProps) => {
  const imageClass = isReversed
    ? `${styles.image} ${styles.reversed}`
    : styles.image;
  const dispatch = useDispatch();

  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsTooltipVisible(true);
    dispatch(setCardName(name));
  };

  const handleMouseLeave = () => {
    setIsTooltipVisible(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={imagePath} alt={name} className={imageClass} />
      {isTooltipVisible && <Tooltip name={name} />}
    </div>
  );
};
