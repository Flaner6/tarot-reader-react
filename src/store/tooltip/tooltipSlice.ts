import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../store';

interface TooltipState {
  message: string;
  isVisible: boolean;
}

const initialState: TooltipState = {
  message: '',
  isVisible: false,
};

export const tooltipSlice = createSlice({
  name: 'tooltip',
  initialState,
  reducers: {
    showMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    showTooltip: (state) => {
      state.isVisible = true;
    },
    hideTooltip: (state) => {
      state.isVisible = false;
    },
  },
});

export const { showMessage, showTooltip, hideTooltip } = tooltipSlice.actions;

export const selectMessage = (state: RootState) => state.tooltip.message;
export const selectIsVisible = (state: RootState) => state.tooltip.isVisible;

export default tooltipSlice.reducer;
