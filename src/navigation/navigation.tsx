import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Main from '../scenes/Main';
import {MainScreenNavigationProp} from '../entities/general';

export type MainStackParamList = {
  Home: undefined;
  Main: undefined;
};

const MainStack = createStackNavigator<MainStackParamList>();
const Drawer = createDrawerNavigator<MainStackParamList>();

type IProps = {
  navigation: MainScreenNavigationProp;
};

const MainStackScreen: React.FC<IProps> = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        options={{headerShown: false}}
        name={'Main'}
        component={Main}
      />
    </MainStack.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName={'Home'}>
      <Drawer.Screen name={'Home'} component={MainStackScreen} />
    </Drawer.Navigator>
  );
};

export default React.memo(() => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
});
