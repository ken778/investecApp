import { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, PanResponder, Animated ,Image, Alert} from 'react-native';
import SwipeButton from 'rn-swipe-button'


import { Dimensions } from "react-native";

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;


const SlideButton = ({navigation}) => {


       return(
        <>
           <View style={styles.buttonView}>
              <Text style={styles.buttonText}></Text>
           
            <SwipeButton
             
             disabled= {false}
             swipeSuccessThreshold = {70}
             height = {50}
             width = {width * 0.9}
             title = 'Slide me to continue'
             titleColor='#6eb1f7'
             onSwipeSuccess={()=>{navigation.navigate('Home');Alert.alert('Welcome to investec')}}
             thumbIconStyles={{
                 borderRadius: 15,

             }}
             thu
             railBackgroundColor="#1a1924"
             railFillBorderColor='#6eb1f7'
             thumbIconBackgroundColor='#6eb1f7'
             thumbIconBorderColor='white'
             railFillBackgroundColor='#6eb1f7'
             railBorderColor='#bbeaff'
             railStyles={{
                    
                    
             } 
             }
             

            >
            

            </SwipeButton>
           
           </View>
        </>
       )
     };

  export default SlideButton;
  
  const styles = StyleSheet.create({

    buttonView:{
    

    },
    buttonText:{
      fontSize:10,
      marginVertical:7,
      textAlign:'center'
    }

    
  });