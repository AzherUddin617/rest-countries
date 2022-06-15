import {
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { RootState } from '../store';

export type SearchState = {
    query: string;
}

const initialState: SearchState = {
    query: ''
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setQuery: (state, action: PayloadAction<string>) => {
            state.query = action.payload;
        }
    }
});

export const {
    setQuery
} = searchSlice.actions;

export const selectSearch = (state: RootState) => state.search.query;

export default searchSlice.reducer;