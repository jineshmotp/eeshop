import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import styles from './styles';

interface ButtonProps {
    text: string;
    onPress: () => void;
    containerStyles?: object;
  }
  
  const Button = ({ text, onPress, containerStyles }: ButtonProps) => {
    return (
      <Pressable onPress={onPress} style={[styles.root, containerStyles]}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    );
  };
  

export default Button;