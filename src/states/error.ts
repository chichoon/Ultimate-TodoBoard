import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from 'states';

import { IError } from 'types/information';

const INIT_ERROR: IError = {
  status: 200,
  data: 'No Error',
};

const errorSlice = createSlice({
  name: 'error',
  initialState: INIT_ERROR,
  reducers: {
    setError: (state: IError, action: PayloadAction<IError>) => action.payload,
  },
});

export const { setError } = errorSlice.actions;

export default errorSlice.reducer;

export const getError = (state: RootState): IError => state.error;
