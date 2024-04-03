import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import ProductData from '../../app/components/ProductCard';

const Products_old = () => {
    // const [CartCount, setCartCount] = useState(0);
    this.data = [{name: 'name1'}, {name: 'name2'}];
    return (
        <View style={{flex: 1, flexWrap: 'wrap', flexDirection: 'row'}}>
            {/* <Text>{CartCount}</Text> */}
            <ScrollView>
                <ProductData name={this.data} />
                {/* <ProductData name={'Apple'} price={25} /> */}
                {/* <ProductData name={'Vivo'} price={35} /> */}
            </ScrollView>
        </View>
    )
}



export default Products_old;