import {UI_TYPES} from '../types';

export const setLoadingStatus = (isLoading: boolean) => ({
  type: UI_TYPES.SET_LOADING,
  payload: isLoading,
});
