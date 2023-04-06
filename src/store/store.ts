import { configureStore } from '@reduxjs/toolkit';
import userPromptReducer from './userPrompt/userPromptSlice';
import modalReducer from './modal/modalSlice';

export const store = configureStore({
  reducer: {
    userPrompt: userPromptReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store