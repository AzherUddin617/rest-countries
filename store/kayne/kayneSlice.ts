import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit';
import { RootState } from '../store';

export type KayneState = {
    data: { quote: string },
    pending: boolean,
    error: boolean,
};

const initialState: KayneState = {
    data: { quote: "click that button" },
    pending: false,
    error: false,
};

export const getKayneQuote = createAsyncThunk('kayne/kayneQuote', async ()=> {
    const response = await fetch('https://api.kanye.rest/');
    const data = await response.json();

    return data;
});

export const kayneSlice = createSlice({
    name: 'kayne',
    initialState,
    reducers: {},

    extraReducers: builder => {
        builder
            .addCase(getKayneQuote.pending, state => {
                state.pending = true;
            })
            .addCase(getKayneQuote.fulfilled, (state, { payload }) => {
                state.pending = false;
                state.data = payload;
            })
            .addCase(getKayneQuote.rejected, state => {
                state.error = false;
            })
    }
});

export const selectKayne = (state: RootState) => state.kayne;

export default kayneSlice.reducer;