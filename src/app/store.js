import { configureStore, combineReducers } from "@reduxjs/toolkit";
import sofasReducer from "./reducers/sofasReducer";

const rootReducer = combineReducers({
  sofas: sofasReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
