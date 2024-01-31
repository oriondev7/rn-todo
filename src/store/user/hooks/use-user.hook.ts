import { useDispatch, useSelector } from '../../hooks';
import { getUserSelector, isLoadingUserSelector } from '../selectors';
import { fetchUserThunk } from '../thunks/fetch-user-thunk';
import { FetchUserBody } from '../../../model/user';
import { useCallback } from 'react';

export const useUser = () => {
  const dispatch = useDispatch();

  const user = useSelector(getUserSelector);
  const isLoadingUser = useSelector(isLoadingUserSelector);

  const fetchUser = useCallback(
    (body: FetchUserBody) => dispatch(fetchUserThunk(body)).unwrap(),
    [dispatch],
  );

  return {
    user,
    fetchUser,
    isLoadingUser,
  };
};
