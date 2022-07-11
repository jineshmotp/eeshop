import React, {useState, useEffect} from 'react';
import { View,StyleSheet,FlatList} from 'react-native';
import ProductItem from '../../components/ProductItem';

import {DataStore} from 'aws-amplify';
import {Product} from '../../models';

//import products from '../../data/products';


const HomeScreen = ({searchValue}: {searchValue: string}) => {

  //console.warn(searchValue);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    DataStore.query(Product).then(setProducts);
    
    //const fetchProducts = async () => { 
    //DataStore.query(Product).then(setProducts);
    
    
    //const results = await DataStore.query(Product);
    //setProducts(results);
  //}
  //fetchProducts();
  }, []);

  
  return (
    <View style={styles.page}>     
       <FlatList
        data={products}
        renderItem={({item}) => <ProductItem item={item} />}
        showsVerticalScrollIndicator={false}        
      />
     
    </View>
  );
};

const styles = StyleSheet.create({
  page: {

   padding:10
  },

});

export default HomeScreen;
