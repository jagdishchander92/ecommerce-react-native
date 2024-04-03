import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Button, Image, Pressable } from 'react-native';
import ProductData from '../components/ProductCard';
import ExternalStylesheet from '../../assets/css/style';

import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartAction';

const ProductDetails = ({ route, navigation} ) => {
  // console.warn(route)
  // return false;
    const dispatch = useDispatch();
    // console.warn(route.params)
    const { title, price, description, images, quantity } = route.params.item;
    // console.warn(item)
      /* const onAddToCart = () => {
        addToCart$({...route.params.item, quantity:1});
      }; */ 
      /* const [itemArray, setitemArray] = useState([]);
      itemArray = route.params.item; */
      
      const addItem = (item) => {
        dispatch(addToCart(item));
        // console.warn("Clicked", Object.entries(...item));
      }  
    const _renderBottom = () => {
        return (
          <Button
            onPress={() => {
              // onAddToCart();
              // navigation.navigate('Cart');
            }}
            // price={price}
            title="ADD"
          />
        );
      };
    return (
        <View>
            <Pressable onPress={() => navigation.goBack()}>
                {/* <Feather
                  name="chevron-left"
                  size={scale(25)}
                  color={appColors.black}
                /> */}
                <Text>Back</Text>
              </Pressable>
            <View style={{marginBottom: 10}}>
                <Image source={{ uri: images }} style={{width: '100%', height: 250}} />
            </View>
            <View>
                <Text style={[style.textTitle, style.textLabel]}>Name: {title}</Text>
                <Text style={[style.textLabel, {color: 'red'}]}>Price: ${price}</Text>
                <Text style={style.textLabel}>In Stock: {quantity}</Text>
                <Text style={style.textLabel}>Description: {description}</Text>
                <Button title='Add to cart' color={'blue'} onPress={() => addItem(...route.params.item)} />
                {/* {_renderBottom()}             */}
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    productCard:{
        borderWidth: 2,
        borderColor: 'grey',
        // borderRadius: 5,
        // padding: 5,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 1 },
        // shadowOpacity: 0.8,
        // shadowRadius: 2, 
        // elevation: 2
    },
    textLabel: {
      fontSize: 15
    },
    textTitle: {
      fontWeight: 'bold',
    }
})

export default ProductDetails;