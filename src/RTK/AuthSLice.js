import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp: (state, action) => {
      state.user = action.payload;
    },
    logOut: () => {},
  },
});

export default authSlice.reducer;
export const { signUp, logOut } = authSlice.actions;
