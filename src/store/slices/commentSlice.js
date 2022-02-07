import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {commentService} from "../../services";

export const getAllCommentsThunk = createAsyncThunk(
    'commentSlice/getAllCommentsThunk',
    async (_, {rejectWithValue}) => {
        try {
            return await commentService.getAll();
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const commentSlice = createSlice({
    name: "commentSlice",
    initialState: {
        comments: [],
        status: null,
        error: null
    },
    extraReducers: {
        [getAllCommentsThunk.pending]:(state) => {
            state.status = 'pending';
        },
        [getAllCommentsThunk.fulfilled]:(state, action) => {
            state.status = 'fulfilled';
            state.comments = action.payload;
        },
        [getAllCommentsThunk.rejected]:(state, action) => {
            state.status = 'rejected'
            state.error = action.payload;
        }
    }
});

const commentReducer = commentSlice.reducer;
export {commentReducer};
