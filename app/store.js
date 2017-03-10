import { persistStore, autoRehydrate } from 'redux-persist'
import {applyMiddleware, createStore} from 'redux'
import { AsyncStorage } from 'react-native'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from './reducers/rootReducer'
import actions from './reducers/rootAction'

const logger = createLogger({
  // Logger only in Dev mode and mute logging to console of update lastPollTime action
  predicate: (getState, action) => __DEV__
});
const middleware = applyMiddleware(thunk, logger);

const store = autoRehydrate()(createStore)(rootReducer, middleware);
persistStore(store, {storage: AsyncStorage});

export default store;
