import React, { useState, useEffect } from 'react';

import styles from './Tooltip.module.css';

type TooltipProps = {
  name: string;
};

export const Tooltip = ({ name }: TooltipProps) => {
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: -100,
    y: -100,
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
      <div className={styles.tooltipMessage}>{name}</div>
    </div>
  );
};
