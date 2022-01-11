import {UI_TYPES} from '../types';
import {UIStateInterface} from '../../entities/ui.entities';

const INITIAL_STATE: UIStateInterface = {
  isLoading: false,
};

export const uiReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case UI_TYPES.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};
