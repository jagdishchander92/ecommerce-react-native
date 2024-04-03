import React from "react";
import { Image, Text, View } from "react-native";

// import DrawerNavigator from "../routing/DrawerNavigator";
// import BottomNavigator from "../routing/BottomNavigator";
const Home = ({ navigation }) => {
    return(
        <View style={{flex: 1}}>
            <Image source={require('../../assets/slide1.jpg')} style={{width: '100%', height: 300}} />
        </View>
    );
}

export default Home;