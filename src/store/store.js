import { configureStore } from '@reduxjs/toolkit';
import userPromptReducer from './userPrompt/userPromptSlice';

export const store = configureStore({
  reducer: {
    userPrompt: userPromptReducer,
  },
});

export default store;