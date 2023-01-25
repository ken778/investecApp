import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

import { Dimensions } from "react-native";

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const Input = ({ setInput, placeholder }) => {
    const [inputValue, setInputValue] = useState('');
  
    return (
     <>
     </>
    );
  };
  
  const styles = StyleSheet.create({
    input: {
      width: width *0.9,
      borderWidth: 1,
      borderColor: 'black',
      padding: 15,
      margin: 10,
      borderRadius:15
    }
  });
  
  export default Input;