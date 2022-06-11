import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from 'states';

const problemIDSlice = createSlice({
  name: 'problemID',
  initialState: 0,
  reducers: {
    setProblemID: (_, action: PayloadAction<number>) => action.payload,
  },
});

export const { setProblemID } = problemIDSlice.actions;

export default problemIDSlice.reducer;

export const getProblemID = (state: RootState): number => state.problemID;
