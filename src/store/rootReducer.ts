import {combineReducers} from 'redux';
import {carReducer, uiReducer} from './reducers';

export const rootReducer = combineReducers({
  car: carReducer,
  ui: uiReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
