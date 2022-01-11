import {CAR_TYPES} from '../types';
import {CarStateInterface} from '../../entities/car.entities';

const INITIAL_STATE: CarStateInterface = {
  allCars: [],
};

export const carReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case CAR_TYPES.SET_CARS:
      return {
        ...state,
        allCars: action.payload,
      };
    default:
      return state;
  }
};
