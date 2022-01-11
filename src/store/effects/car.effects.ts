import {postRequest} from '../../helpers/general.gelpers';
import {setCars} from '../actions/car.actions';
import {ThunkActionType} from '../../entities/general';
import {apiUrl} from '../../config/api';
import {setLoadingStatus} from '../actions/ui.actions';

export const getAllCars = (): ThunkActionType => {
  return async (dispatch) => {
    dispatch(setLoadingStatus(true));
    try {
      const carData = await postRequest(
        apiUrl,
        {
          'Content-Type': 'application/json;charset=utf-8',
        },
        {},
        'GET',
      );

      if (carData.Count > 0) {
        await dispatch(setCars(carData.Results));
      }
    } catch (e) {

      console.log('Failed to load cars');
    }
    dispatch(setLoadingStatus(false));
  };
};

export const getAllUtils = 1;
