// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// export const fetchRegister = createAsyncThunk("register-user", async (formData) => {
//     try {
//       const response = await axios.post(
//         "https://tarmeezacademy.com/api/v1/register",
//         formData
//       );
  
//       // Store the token in the Redux store
//       localStorage.setItem("token", response.data.user.token);
  
//       return response.data.user;
//     } catch (error) {
//       throw error;
//     }
//   });
  
// const initialState = {
//   user: null,
//   token:null,
//   loading: "false",
//   error: null,
// };
// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   extraReducers: (builder) => {
//     builder.addCase(fetchRegister.pending, (state) => {
//       state.loading = "true";
//       state.error = null;
//     });
//     builder.addCase(fetchRegister.fulfilled, (state, action) => {
//       state.user = action.payload;
//       state.token = action.payload; 
//       state.error = null;
//       state.loading = "false";
//     });
//     builder.addCase(fetchRegister.rejected, (state) => {
//       state.error = true;
//     });
//   },
// });
// export default authSlice.reducer;
// export const Status = (state) => state.auth.loading;
