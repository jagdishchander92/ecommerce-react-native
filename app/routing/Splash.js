import React, { useEffect } from 'react';
import {View, Text, Image} from 'react-native';


const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Parent')
        }, 2000)
    }, []);
    return (
        <View>
            <Text>Splash</Text>
            {/* <Image source={require('../../assets/slide1.jpg')} style={{width: 450, height: 250}} /> */}
        </View>
    )
}

export default Splash;