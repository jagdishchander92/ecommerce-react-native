import React from "react";
import { Text, View } from "react-native";

const Screen2 = ({navigation}) => {
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text onPress={() => navigation.openDrawer()}>Screen2-Open Drawer</Text>
        </View>
    )
}

export default Screen2;