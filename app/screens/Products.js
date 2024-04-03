import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity, ActivityIndicator, SafeAreaView, StyleSheet } from 'react-native';
import ProductCard from '../components/ProductCard';
// import ProductDetails from '../screens/ProductDetails';



const Products = ({ navigation }) => {
    // const [loading, setLoading] = useState(true); //Without all load
    const [loading, setLoading] = useState(false);
    const [dataSource, setDataSource] = useState([]);
    const [offset, setOffset] = useState(1);
    const [isListEnd, setIsListEnd] = useState(false);



    /* const addItem = (item) => {
        dispatch(addToCart(item));
    } */

    useEffect(() => getData(), []);

    const getData = () => {
        // console.log(offset);
        if(!loading && !isListEnd){
            console.log('getData');
            setLoading(true);
            // fetch('http://localhost/ci_testing/api/products?offset=' + offset)
            fetch('https://topkblogs.in/ci_testing/api/products?offset=' + offset + '&per_page=4')
            // fetch('https://dummyjson.com/products?offset=' + offset)
            .then(response => response.json())
            .then(responseJson => {
                // console.log(responseJson);
                if(responseJson.products.length > 0){
                    setOffset(offset + 1);
                    setDataSource([...dataSource, ...responseJson.products]);
                    setLoading(false);
                }else{
                    setIsListEnd(true);
                    setLoading(false);
                }
            })
            .catch(error => {
                console.error(error);
            })
        }
    }
    /* const [products, setProducts] = useState([
        { id: "1", name: "Nike Shoes", price: 70.99, image: require('../../assets/product-image.jpg'), description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
        { id: "2", name: "Smart Watch", price: 109.36, image: require('../../assets/1.jpg'), description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
        { id: "3", name: "Tesla Logo", price: 39.14, image: require('../../assets/3.jpg'), description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
        { id: "4", name: "Coca Cola", price: 59.59, image: require('../../assets/4.jpg'), description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
        { id: "5", name: "Apple MacBook", price: 19.25, image: require('../../assets/5.jpg'), description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
        { id: "6", name: "Perfume Gucci", price: 68.78, image: require('../../assets/6.jpg'), description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
    ]);*/

    /* const ProductCard = ({ item }) => {
        return <Product navigation={navigation} item={item} />;
    }; */ 

    const renderFooter = () => {
        return (
            <View style={styles.footer}>
            <TouchableOpacity
            activeOpacity={0.9}
            onPress={getData}
            style={styles.loadMoreBtn}
            >
                <Text style={styles.btnText}>Load More</Text>
                {loading ? (
                    <ActivityIndicator color="white" style={{marginLeft: 8} } />
                ) : null}

            </TouchableOpacity>
        </View>
        )
    }

    /* const ItemView = ({item}) => {
        return (
            // Flat List Item
            <Text style={styles.itemStyle} onPress={() => getItem(item)}>
                {item.id}
                {'.'}
                {item.title.toUpperCase()}
            </Text>
        )
    } */

    /* const ItemSeparatorView = () => {
        // Flat List Item Separator
        return (
            <View
            style={{height: 0.5, width: '100%', backgroundColor: '#c8c8c8'}}
            />
                
            
        )
    } */

    /* const getItem = item => {
        alert('Id : ' + item.id + ' Title : ' + item.title);
    } */



    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <FlatList 
                    data={dataSource}
                    keyExtractor={(item, index) => index.toString()}
                    // ItemSeparatorComponent={ItemSeparatorView}
                    // enableEmptySections={true}
                    // renderItem={ItemView}
                    renderItem={({ item, index }) => (
                        <ProductCard 
                        key={index} 
                        navigation={navigation}
                        item={item} />
                    )}
                    ListFooterComponent={renderFooter}
                    onEndReached={getData}
                    onEndReachedThreshold={0.5}
                    columnWrapperStyle={{ justifyContent: 'space-between' }} // Design Option
                    showsHorizontalScrollIndicator={false} // Design Option
                    ItemSeparatorComponent={() => <View style={{ padding: 15 }} />} // Design Option
                    horizontal={false} // Design Option
                    numColumns={2} // Design Option
                    style={{margin: 3}} // Design Option
                />
            </View>

        </SafeAreaView>
        )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1
    },
    footer: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    loadMoreBtn: {
        padding: 10,
        backgroundColor: '#800000',
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center'
    }
})


export default Products;