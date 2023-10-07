import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // You can choose between different storage options

import rootReducer from "./slice"; // Import your rootReducer

// Define the configuration for Redux Persist
const persistConfig = {
  key: "root", // Key to store the data in the storage
  storage, // Use the chosen storage (e.g., local storage, cookies)
};

// Create a persisted reducer with the configuration
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store using the persisted reducer
export const store = configureStore({
  reducer: persistedReducer, // Use the persisted reducer
  // ...other store configuration options
});

// Create a persistor object for later use (optional)
export const persistor = persistStore(store);
