import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';

import Parent from './Parent';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text, View } from 'react-native';
import Home from '../screens/Home';
// import Screen1 from './Screen1';
// import Screen2 from './Screen2';
// import Screen3 from './Screen3';
import Products from '../screens/Products';
import Header from '../screens/Header';
import Cart from '../screens/Cart';
import ProductDetails from '../screens/ProductDetails';
const Bottom = createBottomTabNavigator();

const BottomNavigator = () => {
  // const { screenName } = route.params;
  return (
    <Bottom.Navigator >
      <Bottom.Screen 
      name='Home' 
      component={Home} 
      options={{ 
        headerShown: true, 
        tabBarIcon: (tabinfo) => { 
            return (<Image style={{ height: 30, width: 30, tintColor: tabinfo.focused ? 'purple' : 'black' }} source={require('../../assets/home.png')} />) 
          }, 
          header: ({navigation}) => <Header navigation={navigation} /> 
        }} 
        // initialParams={{ screenName: 'Home' }}
        />

      <Bottom.Screen 
      name='Products' 
      component={Products} 
      options={{ headerShown: false, tabBarIcon: (tabinfo) => { return (<Image style={{ height: 25, width: 25, tintColor: tabinfo.focused ? 'purple' : 'black' }} source={require('../../assets/list.png')} />) } }} />
      
      <Bottom.Screen 
      name='ProductDetails' 
      component={ProductDetails} 
      options={{      
        tabBarButton: (props) => null,
        tabBarVisible: false,
        tabBarBadge: 3,
        tabBarLabel: 'ProductDetails',
        }} />

      <Bottom.Screen 
      name='Cart' 
      component={Cart} 
      options={{ 
        headerShown: true, 
        tabBarIcon: (tabinfo) => { return (<Image style={{ height: 30, width: 30, tintColor: tabinfo.focused ? 'purple' : 'black' }} source={require('../../assets/shopping-cart.png')} />) }, 
        header: ({navigation}) => <Header navigation={navigation} /> }} />
    </Bottom.Navigator>

  );
}

export default BottomNavigator;