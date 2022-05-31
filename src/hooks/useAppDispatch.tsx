import { useDispatch } from 'react-redux';
import type { AppDispatch } from 'states/index';

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
