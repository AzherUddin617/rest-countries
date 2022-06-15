import {
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Country } from '../../utils/index';

export type CountriesState = {
    data: Country[];
}

const initialState: CountriesState = {
    data: []
}

export const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        addCountry: (state, action: PayloadAction<Country>) => {
            state.data.push(action.payload);
        },
        
        setCountries: (state, action: PayloadAction<Country[]>) => {
            state.data = action.payload;
        }
    }
});

export const {
    setCountries,
    addCountry,
} = countriesSlice.actions;

export const selectCountries = (state: RootState) => state.countries.data;

export default countriesSlice.reducer;