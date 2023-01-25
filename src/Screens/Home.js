import React, { useState } from "react";
import { Alert, StatusBar, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Dimensions } from "react-native";

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;


import Header from "../Components/Header";
import Input from "../Components/Input";
import Button from "../Components/Button";
import ExternalStyle from "../Style/ExternalStyle";

import {useSelector, useDispatch} from 'react-redux'
import { setName } from "../redux/actions";

const Home = ({navigation})=>{
   const {name} = useSelector(state => state.userReducer)
   const dispatch = useDispatch();
  // const [name, setName] = useState('');
    return (
        <>
          <View style={styles.nameView}>
               
               {name? (<Text  style={styles.nameText}>Hi, {name}</Text>):(<Text  style={styles.nameText}>{}</Text>)
                }
          </View>
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <View>
                        <TextInput
                            style={styles.input}
                            onChangeText={text => {
                                // setName(text);
                                dispatch(setName(text))
                            }}
                            value={name}
                            placeholder="Enter your name"
                        />
                    </View>
                    <Button
                    title='ADD'
                        setInput={name}
                        ButtonStyle={ExternalStyle.skyBlueBotton}
                        textStyle={ExternalStyle.skyBlueBottonText} />
                    <Button
                    title='Go to profile'
                        onPress={()=>navigation.navigate('Profile',{name: name})}
                        ButtonStyle={ExternalStyle.skyBlueBotton}
                        textStyle={ExternalStyle.skyBlueBottonText} />
                        
                </View>
            </View>

        </>
    )
}



const styles = StyleSheet.create({
    nameView:{
      padding:15
    },
    nameText:{
      textAlign:'right',
      fontWeight:"600",
      fontSize:20
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    formContainer: {
      alignItems: 'center',
      justifyContent: 'center'
    },
   
    input: {
        width: width *0.9,
        borderWidth: 1,
        borderColor: 'black',
        padding: 15,
        margin: 10,
        borderRadius:15
      }
  });
  

export default Home;

