import React, {useState, useEffect} from 'react';
import {Text, ScrollView, ActivityIndicator, View,Pressable} from 'react-native';
import styles from './styles';
import Octicons from 'react-native-vector-icons';

const QuantitySelector = ({quantity, setQuantity}) => {
  const onMinus = () => {
    setQuantity(Math.max(0, quantity - 1));
  };

  const onPlus = () => {
    setQuantity(quantity + 1);
  };

 
  return (
    <View style={styles.root}>
    <Pressable onPress={onMinus} style={styles.button}>
      <Text style={styles.butonText}>-</Text>
    </Pressable>

    <Text style={styles.quantity}>{quantity}</Text>

    <Pressable onPress={onPlus} style={styles.button}>
      <Text style={styles.butonText}>+</Text>
    </Pressable>
  </View>
  );
};

export default QuantitySelector;
