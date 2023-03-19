import { createSlice } from "@reduxjs/toolkit";
// export const getUser = localStorage.getItem("user")
//   ? JSON.parse(localStorage.getItem("user"))
//   : []
const initialState = {
  user:[]
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp: (state, action) => {
      state.user = action.payload
      
    //   localStorage.setItem("user", JSON.stringify(state.user));
    },
    logOut:() => {
        // localStorage.removeItem('user')
    }
   
  },
});

export default authSlice.reducer;
export const { signUp, logOut } = authSlice.actions;

