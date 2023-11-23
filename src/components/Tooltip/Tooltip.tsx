import React, { useState, useEffect } from 'react';

import styles from './Tooltip.module.css';

type TooltipProps = {
  message: string;
};

export const Tooltip = ({ message }: TooltipProps) => {
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className={styles.tooltip}
      style={{ left: position.x, top: position.y }}
    >
      <div className={styles.tooltipArrow}></div>
      <div className={styles.tooltipMessage}>{message}</div>
    </div>
  );
};
