import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    startedReading: false,
  };

export const userPromptSlice = createSlice({
  name: 'userPrompt',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    startReading: (state) => {
        state.startedReading = true;
      },
  },
});

export const { setName, startReading  } = userPromptSlice.actions;

export default userPromptSlice.reducer;