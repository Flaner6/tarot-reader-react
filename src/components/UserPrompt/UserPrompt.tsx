import React, { useState } from 'react';

type StartButtonProps = {
  onButtonClick: (name: string) => void;
}

export const StartButton = (props: StartButtonProps) => {
  const [name, setName] = useState('');

  const handleClick = () => {
    if (name) {
      props.onButtonClick(name);
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  return (
    <div>
      <input type="text" placeholder="Enter your name" onChange={handleChange} value={name} />
      <button onClick={handleClick}>Start Reading</button>
    </div>
  );
}
