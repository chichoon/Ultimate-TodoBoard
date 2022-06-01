import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from 'states/index';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
