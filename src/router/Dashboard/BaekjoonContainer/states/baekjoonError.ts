import { IError } from 'types/information';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from 'states';

const baekjoonErrorSlice = createSlice({
  name: 'baekjoonError',
  initialState: { status: 200, data: '' },
  reducers: {
    setBaekjoonError: (state: IError, action: PayloadAction<IError>) => action.payload,
  },
});

export const { setBaekjoonError } = baekjoonErrorSlice.actions;

export default baekjoonErrorSlice.reducer;

export const getBaekjoonError = (state: RootState): IError => state.baekjoonError;
