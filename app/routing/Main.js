import React from "react";
import { Text, View } from "react-native";
import BottomNavigator from "./BottomNavigator";

const Main = () => {
    return(
        <View style={{flex: 1}}>
            {/* <Text>Main</Text> */}
            <BottomNavigator />
        </View>
    )
}

export default Main;