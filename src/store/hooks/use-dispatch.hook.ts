import { useDispatch as useReduxDispatch } from 'react-redux';
import { AppDispatch } from '../../model/store';

export const useDispatch = () => useReduxDispatch<AppDispatch>();
