import { current } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    currentUser: null,
    loading: false,
    error: false,
    token: null,
  },
  reducers: {
    fetchStart: state => {
      state.loading = true;
      state.error = false;
    },
    
    
    registerSuccess: (state, {payload}) => {
      state.loading = false;
      state.currentUser = payload.data.username;
      state.token = payload?.token;

    },

    loginSuccess: (state, {payload}) => {
      state.loading = false;
      state.currentUser = payload?.user?.username;
      state.token = payload.token;

    },

    logoutSuccess: (state) => {
      state.loading = false;
      state.currentUser = null;
      state.isAdmin = false;
      state.token = null;

    },


    fetchFail: state => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  registerSuccess,
  fetchFail,
  logoutSuccess,
  loginSuccess,
} = authSlice.actions;
export default authSlice.reducer;
