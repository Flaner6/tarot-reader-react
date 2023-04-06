import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserPromptState {
  name: string;
  startedReading: boolean;
}

const initialState: UserPromptState = {
  name: '',
  startedReading: false,
};

export const userPromptSlice = createSlice({
  name: 'userPrompt',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    startReading: (state) => {
      state.startedReading = true;
    },
  },
});

export const { setName, startReading } = userPromptSlice.actions;

export default userPromptSlice.reducer;
