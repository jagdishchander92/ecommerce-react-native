
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import { View, Button, Text } from 'react-native';
import Splash from './Splash';
import Parent from './Parent';
// import Products from './normal/Products';
// import ProductDetails from '../app/screens/ProductDetails/index';
import ProductCard from '../components/ProductCard';
import ProductDetails from '../screens/ProductDetails';
import Products from '../screens/Products';
import Home from '../screens/Home';
import BottomNavigator from './BottomNavigator';
import DrawerNavigator from './DrawerNavigator';
import Header from '../screens/Header';

const Stack = createStackNavigator();


const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      // headerMode={'screen'}
      /* screenOptions={{
        header: ({navigation}) => <Header navigation={navigation} />,
      }} */>
        <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false, header: ({navigation}) => <Header navigation={navigation} /> }} />
        <Stack.Screen name='Parent' component={Parent}
          options={{ headerShown: false }} />
        <Stack.Screen name='Home' component={Home}
          options={{ headerShown: false }} />
        <Stack.Screen name='Products' component={Products}
          options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default AppNavigator;
