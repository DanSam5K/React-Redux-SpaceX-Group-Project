import { createStore, combineReducers, applyMiddleware } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionsReducer from './missions/mission';
import rocketsReducer from './rockets/rocket';

const reducer = combineReducers({ missionsReducer, rocketsReducer });

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
