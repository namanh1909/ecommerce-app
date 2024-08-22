import { configureStore } from '@reduxjs/toolkit';
import {
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';
import { authReducer } from './slices';
import screenTracking from './middleware/ScreenTrackingMiddleware';  // Import your custom middleware

const rootReducer = {
	auth: authReducer,
};

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			immutableCheck: false,
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
			whiteList: ['auth'],
		})
			.prepend(sagaMiddleware)  // Prepend sagaMiddleware to the middleware chain
			.concat(screenTracking),  // Add your custom screen tracking middleware here
	devTools: __DEV__,
});

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };
