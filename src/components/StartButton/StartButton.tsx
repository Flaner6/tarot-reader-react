import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setName, startReading } from '../../store/userPrompt/userPromptSlice';
import { userPrompt } from "../../store/store"

interface StartButtonProps {
  onButtonClick: () => void;
}

export const StartButton = ({ onButtonClick }: StartButtonProps) => {
  const dispatch = useDispatch();
  const name = useSelector((state: userPrompt) => state.userPrompt.name);
  const [localName, setLocalName] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocalName(event.target.value);
  };

  const handleClick = () => {
    if (localName) {
      dispatch(setName(localName));
      dispatch(startReading());
      onButtonClick(); // trigger the callback to start the reading
    }
  };

  return (
    <div>
      <input type="text" placeholder="Enter your name" onChange={handleChange} value={localName} />
      <button onClick={handleClick}>Start Reading</button>
    </div>
  );
};