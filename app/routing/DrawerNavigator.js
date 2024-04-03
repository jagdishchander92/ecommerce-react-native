import React from "react";

import { createDrawerNavigator } from '@react-navigation/drawer';
// import ProductDetails from "../screens/ProductDetails";
// import Parent from "./Parent";
// import Splash from "./Splash";
import Products from "../screens/Products";
import Home from "../screens/Home";
import Main from "./Main";
import Header from "../screens/Header";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            {/* <Drawer.Screen
                name="Main"
                component={Main} 
                options={{headerShown: false,   drawerItemStyle: { display: 'block' }}}
                // initialParams={{ screenName: 'Main' }}
                /> */}

            <Drawer.Screen
                name="Home"
                component={Main} 
                options={{
                    headerShown: false,
                    header: ({navigation}) => <Header navigation={navigation} />
                }}  
                // initialParams={{ screenName: 'Home' }}  
            />
            <Drawer.Screen
                name="Products"
                component={Products} 
                options={{
                    headerShown: true,
                    header: ({navigation}) => <Header navigation={navigation} />
                }}    
            />

            {/* <Drawer.Screen
                // options={{drawerLabel: () => null}}
                name="ProductDetails"
                component={ProductDetails} />

            <Drawer.Screen
                name="Profile"
                component={Parent} /> */}
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;