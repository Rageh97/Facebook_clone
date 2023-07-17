import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  posts: null,
  userPosts: JSON.parse(localStorage.getItem("userposts")) || [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getPost: (state, action) => {
      state.posts = action.payload;
    },
    setPost: (state, action) => {
      state.userPosts.push(action.payload);
      localStorage.setItem("userposts", JSON.stringify(state.userPosts));
    },
    deletePost: (state, action) => {
      state.userPosts = state.userPosts.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("userposts", JSON.stringify(state.userPosts));
    },
  },
});
export default postSlice.reducer;
export const { getPost, setPost, deletePost } = postSlice.actions;
