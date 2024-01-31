import { createAsyncThunk } from '@reduxjs/toolkit';
import { FETCH_USER_THUNK } from '../constants';
import { fetchUser } from '../../../api/user';
import { FetchUserBody, User } from '../../../model/user';

export const fetchUserThunk = createAsyncThunk<User, FetchUserBody>(
  FETCH_USER_THUNK,
  async (payload, { rejectWithValue }) => {
    try {
      const user = await fetchUser(payload);
      return user;
    } catch {
      return rejectWithValue(false);
    }
  },
);
