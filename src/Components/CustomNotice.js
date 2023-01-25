import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CustomNotice = ({ text, style}) => {
  return (

      <View >
          <Text style={[styles.notice, style]} >
              {text}
          </Text>
      </View>
           
   
    
  );
};

const styles = StyleSheet.create({
  notice: {
    fontSize: 18,
    
  },
});

export default CustomNotice;
