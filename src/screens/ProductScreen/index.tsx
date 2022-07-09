import React, {useState, useEffect} from 'react';
import {Text, ScrollView, ActivityIndicator} from 'react-native';
import {useRoute} from '@react-navigation/native';

import styles from './styles';
import {Picker} from '@react-native-picker/picker';

import product from '../../data/product';
import QuantitySelector from '../../components/QuantitySelector';

import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';


const ProductScreen = () => {

  const [selectedOption, setSelectedOption] = useState(product.options ? product.options[0]:null);
  const [quantity, setQuantity] = useState(1);

  const route = useRoute();
  //console.warn(route.params);
 
  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>{product.title}</Text>

      {/* Image carousel */}
      <ImageCarousel images={product.images} />
    

      {/* Option selector */}
      <Picker
      selectedValue={selectedOption}
      onValueChange={itemValue => setSelectedOption(itemValue)}>
      
      {product.options.map(option => (
          <Picker.Item label={option} value={option} />
        ))}
      
    </Picker>
     

      {/* Price */}
      <Text style={styles.price}>
        from ${product.price.toFixed(2)}
        {product.oldPrice && (
          <Text style={styles.oldPrice}> ${product.oldPrice.toFixed(2)}</Text>
        )}
      </Text>

      {/* Description */}
      <Text style={styles.description}>{product.description}</Text>

      {/* Qunatiti selector */}
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
     

      {/* Button */}
      <Button
        text={'Add To Cart'}
        onPress={() => {
          console.warn('Buy now');
        }}
        containerStyles={{backgroundColor: '#e3c905'}}
      />
      <Button
        text={'Buy Now'}
        onPress={() => {
          console.warn('Buy now');
        }}
      />
     
    </ScrollView>
  );
};

export default ProductScreen;
