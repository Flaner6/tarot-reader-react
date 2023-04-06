import React from 'react';
import { useSelector } from 'react-redux';
import { selectMessage, selectIsVisible } from '../../store/modal/modalSlice';



export const Modal = () => {

  const message = useSelector(selectMessage);
  const isVisible = useSelector(selectIsVisible);



  return (
    <>
      {isVisible && (
        <div>
          <div>{message}</div>
        </div>
      )}
    </>
  );
};
