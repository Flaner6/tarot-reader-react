import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { TarotCard } from '../TarotCard/TarotCard';
import { StartButton } from '../StartButton/StartButton';
import styles from './TarotBoard.module.css';
import { RootState } from '../../store/store';
import { startReading } from '../../store/userPrompt/userPromptSlice';

type TarotBoardProps = object;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cardImages = require('../AllCards.json');

export const TarotBoard: React.FC<TarotBoardProps> = () => {
  const randomCardNames = Object.keys(cardImages)
    .sort(() => Math.random() - 0.5)
    .slice(0, 10);

  const { name, startedReading } = useSelector(
    (state: RootState) => state.userPrompt
  );

  const dispatch = useDispatch();

  const handleStartReading = () => {
    dispatch(startReading());
  };

  const crossSectionPositions = [
    { className: styles.centerCard, index: 0 },
    { className: styles.centerTopCard, index: 1 },
    { className: styles.rightCard, index: 2 },
    { className: styles.leftCard, index: 3 },
    { className: styles.topCard, index: 4 },
    { className: styles.bottomCard, index: 5 },
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
        <TarotCard
          imagePath={imagePath}
          name={cardName}
          isReversed={isReversed}
        />
      </div>
    );
  });

  const bodyCards = bodyPositions.map((position) => {
    const cardName = randomCardNames[position.index];
    const imagePath = cardImages[cardName];
    const isReversed = Math.random() < 0.5;
    return (
      <div className={position.className} key={cardName}>
        <TarotCard
          imagePath={imagePath}
          name={cardName}
          isReversed={isReversed}
        />
      </div>
    );
  });

  return (
    <div className={styles.board}>
      {!name && !startedReading && (
        <StartButton onButtonClick={handleStartReading} />
      )}
      {name && startedReading && (
        <div>
          <div>Welcome {name} </div>
          <div className={styles.celticCross}>
            <div>{crossSection}</div>
            <div className={styles.bodyCards}>{bodyCards}</div>
          </div>
        </div>
      )}
    </div>
  );
};
