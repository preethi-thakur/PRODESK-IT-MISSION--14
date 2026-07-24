import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  uid: null,
  displayName: null,
  email: null,
  photoURL: null,
  isAuthenticated: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.uid = action.payload.uid;
      state.displayName = action.payload.displayName;
      state.email = action.payload.email;
      state.photoURL = action.payload.photoURL;
      state.isAuthenticated = true;
    },
    clearUser: (state) => {
      state.uid = null;
      state.displayName = null;
      state.email = null;
      state.photoURL = null;
      state.isAuthenticated = false;
    }
  }
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
