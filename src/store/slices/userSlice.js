import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {userService} from "../../services";

export const getAllUsersThunk = createAsyncThunk(
    'userSlice/getAllUsersThunk',
    async (_,{rejectWithValue}) => {
        try {
            return await userService.getAll();
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const userSlice = createSlice({
    name: "userSlice",
    initialState: {
        users: [],
        status: null,
        error: null
    },
    extraReducers: {
        [getAllUsersThunk.pending]:(state) => {
            state.status = 'pending';
        },
        [getAllUsersThunk.fulfilled]:(state, action) => {
            state.status = 'fulfilled';
            state.users = action.payload;
        },
        [getAllUsersThunk.rejected]:(state, action) => {
            state.status = 'rejected'
            state.error = action.payload;
        }
    }
});

const userReducer = userSlice.reducer;
export {userReducer};
