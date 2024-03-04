import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../store';

interface TooltipState {
  cardName: string;
}

const initialState: TooltipState = {
  cardName: '',
};

export const tooltipSlice = createSlice({
  name: 'tooltip',
  initialState,
  reducers: {
    setCardName: (state, action: PayloadAction<string>) => {
      state.cardName = action.payload;
    },
  },
});

export const { setCardName } = tooltipSlice.actions;

export const selectMessage = (state: RootState) => state.tooltip.cardName;

export default tooltipSlice.reducer;
