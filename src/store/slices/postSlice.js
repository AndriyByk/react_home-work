import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {postService} from "../../services";

export const getAllPostsThunk = createAsyncThunk(
    'postSlice/getAllPostsThunk',
    async (_, {rejectWithValue}) => {
        try {
            return await postService.getAll();
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const postSlice = createSlice({
    name: "postSlice",
    initialState: {
        posts: [],
        status: null,
        error: null
    },
    extraReducers: {
        [getAllPostsThunk.pending]:(state) => {
            state.status = 'pending';
        },
        [getAllPostsThunk.fulfilled]:(state, action) => {
            state.status = 'fulfilled';
            state.posts = action.payload;
        },
        [getAllPostsThunk.rejected]:(state, action) => {
            state.status = 'rejected'
            state.error = action.payload;
        }
    }
});

const postReducer = postSlice.reducer;
export {postReducer};
