import React, { useState } from 'react';

import { View, Text, Button, Image, StyleSheet, FlatList, TouchableOpacity, Pressable } from 'react-native';
import ExternalStylesheet from '../../assets/css/style';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartAction';
import { useNavigation } from '@react-navigation/native';



// import {App} from 'app';

const ProductCard = ({ navigation, item  }) => {
  // const navigation = useNavigation();
  // console.warn(item)
  // addItem;
  const { title, name, description, price, images, isNew, rating, quantity } = item;

  const dispatch = useDispatch();

  // const addItem = (item) => {
  //   dispatch(addToCart(item));
  // }
  // console.warn(image)
  return (
    <Pressable onPress={() => navigation.navigate('ProductDetails', { item })} style={{ width: '49%' }}>
      <View>
        <Image source={{ uri: images }} style={{ width: '100%', height: 250 }} />
        <Text style={[style.textLabel, style.textTitle]}>{title.toUpperCase()?.substring(0, 20)}</Text>
        <Text style={[style.textLabel, ExternalStylesheet.textPrice,{fontWeight: '500',}]}>${price}</Text>
        <Text style={style.textLabel}>In Stock: {quantity}</Text>
      </View>
    </Pressable>
  )
}

const style = StyleSheet.create({
  productCard: {
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

export default ProductCard;