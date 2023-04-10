import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface ModalState {
  message: string;
  isVisible: boolean;
}

const initialState: ModalState = {
  message: '',
  isVisible: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    showModal: (state) => {
      state.isVisible = true;
    },
    hideModal: (state) => {
      state.isVisible = false;
    },
  },
});

export const { showMessage, showModal, hideModal } = modalSlice.actions;

export const selectMessage = (state: RootState) => state.modal.message;
export const selectIsVisible = (state: RootState) => state.modal.isVisible;

export default modalSlice.reducer;
