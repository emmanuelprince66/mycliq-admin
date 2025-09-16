import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import merchantReducer from "../utils/store/merchantSlice";
const persistConfig = {
  key: "root",
  storage,
};
const persistConfig2 = {
  key: "root1",
  storage,
};
const persistedReducer = persistReducer(persistConfig, merchantReducer);

const rootReducer = combineReducers({
  merchantReducer: persistedReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

const persistor = persistStore(store);

export { store, persistor };
