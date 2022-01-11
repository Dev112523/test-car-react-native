import * as React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {RootState} from '../store/rootReducer';
import {getAllCars} from '../store/effects/car.effects';
import {MainScreenNavigationProp, ICar} from '../entities/general';
import {CarComponent} from '../components';

type IProps = {
  navigation: MainScreenNavigationProp;
};

const screenHeight = Dimensions.get('window').height;

const Main: React.FC<IProps> = React.memo(() => {
  const dispatch = useDispatch();

  const carData: Array<ICar> = useSelector(
    (state: RootState) => state.car.allCars,
  );

  const isLoading: boolean = useSelector(
    (state: RootState) => state.ui.isLoading,
  );

  const getCars = async () => {
    await dispatch(getAllCars());
  };

  React.useEffect(() => {
    getCars();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {isLoading && (
        <View style={{...styles.loadingContainer, height: screenHeight}}>
          <ActivityIndicator color="black" size={50} />
        </View>
      )}
      {!isLoading &&
        carData &&
        carData.map((car) => <CarComponent data={car} key={car.MakeId} />)}
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  loadingContainer: {
    height: screenHeight,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Main;
