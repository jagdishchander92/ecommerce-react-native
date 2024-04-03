import React from 'react';
import {View, Text, Button} from 'react-native';
import DrawerNavigator from './DrawerNavigator';

const Parent = ({navigation}) => {
    return (
        <View style={{flex: 1}}>
            <DrawerNavigator />
        </View>
    )
}

export default Parent;