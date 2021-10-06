/* eslint-disable linebreak-style */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionsReducer from './missions/mission';
import rocketsReducer from './rockets/rocket';
import reservationsReducer from './reservations/reservations';

const reducer = combineReducers({
  missionsReducer,
  rocketsReducer,
  reservationsReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
