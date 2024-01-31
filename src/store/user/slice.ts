import { UserSlice } from '../../model/user';
import { createSlice } from '@reduxjs/toolkit';
import { USER_SLICE } from './constants';
import { fetchUserThunk } from './thunks/fetch-user-thunk';

const initialState: UserSlice = {
  isLoading: false,
  user: null,
};

const userSlice = createSlice({
  initialState,
  name: USER_SLICE,
  reducers: {
    logout: () => {
      return initialState;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchUserThunk.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(fetchUserThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });

    builder.addCase(fetchUserThunk.rejected, state => {
      state.isLoading = false;
    });
  },
});

export const userReducer = userSlice.reducer;
export const { logout } = userSlice.actions;
