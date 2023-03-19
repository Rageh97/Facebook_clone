import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    posts: []
}

const postSlice = createSlice({
    name:"post",
    initialState,
    reducers:{
        setPost: (state , action) => {
        state.posts.push(action.payload)
    
          
        },
        deletePost: (state ,action) => {
            state.posts = state.posts.filter(item => item.id !== action.payload.id)
        },
        updatePost: () => {

        },
    }
})
export default postSlice.reducer
export const {setPost, deletePost} = postSlice.actions