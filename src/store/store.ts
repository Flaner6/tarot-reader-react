import { configureStore } from '@reduxjs/toolkit';

import userPromptReducer from './userPrompt/userPromptSlice';
import tooltipReducer from './tooltip/tooltipSlice';

export const store = configureStore({
  reducer: {
    userPrompt: userPromptReducer,
    tooltip: tooltipReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
