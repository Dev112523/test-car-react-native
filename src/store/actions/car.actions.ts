import {CAR_TYPES} from '../types';
import {ICar} from '../../entities/general';

export const setCars = (cars: Array<ICar>) => ({
  type: CAR_TYPES.SET_CARS,
  payload: cars,
});
