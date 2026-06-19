import type {IComments} from "../../models/IComments.ts";
import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {getAll} from "../../services/api.service.ts";

type CommentSliceType = {
    comments: IComments[]
}
const initCommentSliceState: CommentSliceType = {comments: []};

const loadComments = createAsyncThunk('loadComments', async (_, thunkAPI) => {
    const comments = await getAll<IComments[]>('/comments');
    console.log(comments);
    return thunkAPI.fulfillWithValue(comments);

});

export const commentSlice = createSlice({
    name: 'commentSlice',
    initialState: initCommentSliceState,
    reducers: {},
    extraReducers: builder => builder.addCase(loadComments.fulfilled,
        (state, action: PayloadAction<IComments[]>) => {
            state.comments = action.payload
        }),
});

export const commentActions = {
    ...commentSlice.actions, loadComments
}