import {
    Action,
    configureStore,
    ThunkAction,
} from '@reduxjs/toolkit';

import counterReducer from './counter/counterSlice';
import themeReducer from './theme/themeSlice';
import kayneReducer from './kayne/kayneSlice';
import searchReducer from './search/searchSlice';
import countriesReducer from './countries/countriesSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        theme: themeReducer,
        kayne: kayneReducer,
        search: searchReducer,
        countries: countriesReducer,
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>