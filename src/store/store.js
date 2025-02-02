// import { compose, createStore, applyMiddleware } from 'redux';
// above redux will be replaced by configureStore from redux toolkit (below)
import { configureStore } from "@reduxjs/toolkit"

// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import logger from "redux-logger"

import { rootReducer } from "./root-reducer"

const middleWares = [process.env.NODE_ENV === "development" && logger].filter(
    Boolean
)

// const composeEnhancer =
//   (process.env.NODE_ENV !== 'production' &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['user'],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

// export const store = createStore(
//   persistedReducer,
//   undefined,
//   composedEnhancers
// );
// above createStore is replaced by configureStore, below
export const store = configureStore({
    reducer: rootReducer,
    // by stating the middleware used, we will override the default middlewares that come with the toolkit (incl. thunk)
    // if you pass in a func getDefaultMiddleware with param getDefaultMiddleware, you can have the built-in middleware as well as your own.
    // getDefaultMiddleware will return an array, so you can just concat more values to add your own middlewares.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(middleWares),
})

// export const persistor = persistStore(store);
