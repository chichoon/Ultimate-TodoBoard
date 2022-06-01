import { IError } from 'types/information';
import { RootState } from 'states';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const INIT_ERROR: IError = {
  status: 200,
  data: '',
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

export const getBaekjoonItems = (state: RootState): IError => state.error;
