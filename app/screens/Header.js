import React from 'react';
import { Text, View, Image, Pressable } from 'react-native';

const Header = ({ navigation }) => {
    const testingFun = () => {
        console.warn("clicked");
    }
    return (
        <View style={{
            flexDirection: "row"
        }}>
            <View
                style={{
                    flex: 1, flexDirection: "row", padding: 10,
                    backgroundColor: '#fff',
                    width: 300,
                    height: 50,
                    shadowColor: '#000',
                    shadowOffset: { width: 1, height: 1 },
                    shadowOpacity: 0.4,
                    shadowRadius: 3,
                    elevation: 5,
                }}
            >
                <Pressable onPress={() => navigation.openDrawer()} style={{ flex: 1 }}>
                    <View style={{ flex: 1 }}>
                        <Image style={{ height: 30, width: 30, marginLeft: 10 }} source={require('../../assets/menu.png')} />
                    </View>
                </Pressable>
                <View style={{ flex: 1 }}>
                    <Image style={{ height: 40, width: 100, marginLeft: 10 }} source={require('../../assets/dummy-logo.png')} />
                </View>
                <View style={{ flex: 1 }}>
                    <Text>&nbsp;</Text>
                </View>
            </View>
        </View>
    )
}

export default Header;