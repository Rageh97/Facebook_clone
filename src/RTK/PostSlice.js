import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  posts: null,
  
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getPost: (state, action) => {
      state.posts = action.payload;
    },
    setPost: (state, action) => {
        state.posts.push(action.payload)
    },
    // deletePost: (state ,action) => {
    //     state.create_post = state.create_post.filter(item => item.id !== action.payload.id)
    // },
   
  },
});
export default postSlice.reducer;
export const { getPost, setPost } = postSlice.actions;
