import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  isAdmin: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setAdminStatus: (state, action) => {
      state.isAdmin = action.payload;
    },
    setUserLoggedOut: (state) => {
        state.isLoggedIn = false;
        state.isAdmin = false;
      },
  },
});

export const { setUserLoggedIn, setAdminStatus,setUserLoggedOut } = userSlice.actions;

export default userSlice.reducer;
