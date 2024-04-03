import React, {useState} from 'react';

import {View, Text, Button} from 'react-native';

// import {App} from 'app';

const Checkout = (props: any) => {
    // const [CartCount, setCartCount] = useState(0);

    return(
      <View>
        <Text style={{fontSize: 20}}>Checkout</Text>
        <Button title='Add to cart' color={'red'}  />
      </View>
    )
  }

  export default Checkout;