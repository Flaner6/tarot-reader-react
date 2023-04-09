import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Modal.module.css'
import { selectMessage, selectIsVisible } from '../../store/modal/modalSlice';



export const Modal = () => {

  const message = useSelector(selectMessage);
  const isVisible = useSelector(selectIsVisible);



  return (
    <>
      {isVisible && (
        <div className={styles.modalBackdrop}>
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <div className={styles.modalMessage}>{message}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
