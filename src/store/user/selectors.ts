import { RootState } from '../../model/store';

const rootUserSelector = (state: RootState) => state.user;

export const isLoadingUserSelector = (state: RootState) =>
  rootUserSelector(state).isLoading;

export const getUserSelector = (state: RootState) =>
  rootUserSelector(state).user;
