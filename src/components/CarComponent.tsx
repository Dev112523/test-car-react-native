import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Input} from 'native-base';
import {spacingBase, textSize} from '../styles';
import {ICar} from '../entities/general';

interface IProps {
  data: ICar;
}

export const CarComponent: React.FC<IProps> = React.memo(({data}) => {
  return (
    <>
      <View style={style.carWrapper}>
        <View style={style.carDetail}>
          <Text style={style.carProperty}>ID</Text>
          <Text>{data.MakeId}</Text>
        </View>
        <View style={style.carDetail}>
          <Text style={style.carProperty}>MakeName</Text>
          <Text>{data.MakeName}</Text>
        </View>
        <View style={style.carDetail}>
          <Text style={style.carProperty}>Vehicle Type ID</Text>
          <Text>{data.VehicleTypeId}</Text>
        </View>
        <View style={style.carDetail}>
          <Text style={style.carProperty}>Vehicle Type</Text>
          <Text>{data.VehicleTypeName}</Text>
        </View>
      </View>
    </>
  );
});

const style = StyleSheet.create({
  carWrapper: {
    margin: spacingBase,
    padding: spacingBase,
    flex: 1,
    borderWidth: 1,
    borderColor: 'rgba(99, 99, 99, 0.2)',
    borderRadius: 5,
  },
  carDetail: {
    display: 'flex',
    flexDirection: 'row',
  },
  carProperty: {
    fontWeight: 'bold',
    width: 120,
  },
});
