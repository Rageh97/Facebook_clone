// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   user: [],
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     signUp: (state, action) => {
//       state.user = action.payload;
//     },
//     logOut: () => {},
//   },
// });

// export default authSlice.reducer;
// export const { signUp, logOut } = authSlice.actions;

// authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    error: null,
    loading: false,
  },
  reducers: {
    registerRequest: (state) => {
      state.loading = true;
    },
    registerSuccess: (state, action) => {
      state.user = action.payload;
      state.error = null;
      state.loading = false;
    },
    registerFailure: (state, action) => {
      state.user = null;
      state.error = action.payload;
      state.loading = false;
    },
    loginRequest: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.error = null;
      state.loading = false;
    },
    loginFailure: (state, action) => {
      state.user = null;
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  registerRequest,
  registerSuccess,
  registerFailure,
  loginRequest,
  loginSuccess,
  loginFailure,
} = authSlice.actions;

export default authSlice.reducer;
