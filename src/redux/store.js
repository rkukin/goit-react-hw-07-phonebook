import { configureStore } from "@reduxjs/toolkit";
import phoneBookReducer from './phoneBook/phoneBookReducer';

const store = configureStore({
  reducer: {
    contacts: phoneBookReducer
  }
}
);

export default store;