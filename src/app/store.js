import { configureStore } from '@reduxjs/toolkit';
// import { configure } from '@testing-library/react';
import carReducer from "../features/car/carSlice"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});