import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from 'react-redux';
import { RootState } from '../../model/store';

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
