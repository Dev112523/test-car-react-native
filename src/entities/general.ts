import {StackNavigationProp} from '@react-navigation/stack';
import {MainStackParamList} from '../navigation/navigation';
import {ThunkAction} from 'redux-thunk';
import {AnyAction} from 'redux';

export type MainScreenNavigationProp = StackNavigationProp<MainStackParamList>;
export type ThunkActionType = ThunkAction<Promise<void>, {}, {}, AnyAction>;

export interface ICar {
  MakeId: string;
  MakeName: string;
  VehicleTypeId: string;
  VehicleTypeName: string;
}

export type IFormTypes = ICar;
