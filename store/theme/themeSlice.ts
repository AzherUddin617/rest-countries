import {
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit';
import { RootState } from '../store';

import * as themes from './themeTypes';

export type ThemeState = {
    mode: string,
}

const initialState: ThemeState = {
    mode: themes.light
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toDark: (state) => {
            state.mode = themes.dark;
        },
        toLight: (state) => {
            state.mode = themes.light;
        },
        toggleTheme: (state) => {
            switch (state.mode) {
                case themes.dark:
                    state.mode = themes.light;
                    break;
                case themes.light:
                    state.mode = themes.dark;
                    break;
                default:
                    state.mode = themes.light;
            }
        }
    }
});

export const {
    toDark,
    toLight,
    toggleTheme,
} = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme.mode;

export default themeSlice.reducer;