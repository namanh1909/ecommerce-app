import AsyncStorage from '@react-native-community/async-storage';
import { createTransform } from 'redux-persist';
import ImmutablePersistenceTransform from '../../services/ImmutablePersistenceTransform';

createTransform;
// More info here:  https://shift.infinite.red/shipping-persistant-reducers-7341691232b1
const REDUX_PERSIST = {
    active: true,
    reducerVersion: '1.0',
    storeConfig: {
        key: 'primary',
        storage: AsyncStorage,
        timeout: null,
        // Reducer keys that you do NOT want stored to persistence here.
        blacklist: ['login', 'search', 'nav'],
        // Optionally, just specify the keys you DO want stored to persistence.
        // An empty array means 'don't store any reducers' -> infinitered/ignite#409
        // whitelist: [],
        transforms: [ImmutablePersistenceTransform],
    },
};

// REMOVE IS isProcessing isFetching
export const AUTH_REDUX_PERSIST = {
    key: 'auth',
    storage: AsyncStorage,
    blacklist: ['isProcessing', 'isFetching'],
    whitelist: [],
    transforms: [ImmutablePersistenceTransform],
};
export default REDUX_PERSIST;
