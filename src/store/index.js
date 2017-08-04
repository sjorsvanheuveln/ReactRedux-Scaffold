import { combineReducers, createStore } from 'redux';
import ProgressReducer from '../reducers/progress';
import ColorReducer from '../reducers/color';

const combinedReducers = combineReducers({
  //  so here you say, progress is being manipulated by the the progressReducer
  progress: ProgressReducer,
  color: ColorReducer,
});

const Store = createStore(combinedReducers);

export default Store;
