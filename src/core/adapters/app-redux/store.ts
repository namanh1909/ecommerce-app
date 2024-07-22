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
// import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';

import reactotron from '../../../../ReactotronConfig';
import { authReducer } from './slices';

const rootReducer = {
	auth: authReducer,
};

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	reducer: rootReducer,

	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			immutableCheck: false,
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
			whiteList: ['doctors', 'userInfo'],
		})
			// .concat(logger)
			.prepend(sagaMiddleware),
	devTools: __DEV__,
	// enhancers: (getDefaultEnhancers) => [
	//     ...getDefaultEnhancers(),
	//     (reactotron as any).createEnhancer()
	// ],
});

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };
