import React from "react";
import { Alert, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../Components/Button";
import SlideButton from "../Components/SlideButton";

//importing external style sheet
import ExternalStyle from "../Style/ExternalStyle";

import {useSelector, useDispatch} from 'react-redux'
const Landing = ({navigation})=>{

    const {name} = useSelector(state => state.userReducer)


    //navigate to Home
    const goToHomeScreen = () => {
        navigation.navigate("Home")
    }

    //showing alert when second button is clicked 
    const showAlert = ()=>{
        Alert.alert('10 out of 10')
    }


    return(
        <>
        <StatusBar barStyle={"light-content"}/>
        <SafeAreaView style={ExternalStyle.safeView}>
            <View style={ExternalStyle.nameView}>
                {name? (<Text style={ExternalStyle.nameText}>Hi, {name}</Text>):(<Text style={ExternalStyle.nameText}>{}</Text>)
                }
                
            </View>
         <View style={ExternalStyle.mainView}>
             <View style={ExternalStyle.buttonsContainer}>
                <View style={ExternalStyle.buttonsHeaderView}>
                     <Text style={ExternalStyle.buttonsHeaderViewText}>4 variations of a button</Text>
                </View>
                 <Button title='Press me' onPress={goToHomeScreen}  ButtonStyle={ExternalStyle.defaultButton} textStyle={ExternalStyle.defaultButtoText}/>
                  <Button title='Press me'  onPress={showAlert} ButtonStyle={ExternalStyle.greyButton} textStyle={ExternalStyle.defaultButtoText}/>
                  <Button title='Press me' ButtonStyle={ExternalStyle.skyBlueBotton} textStyle={ExternalStyle.skyBlueBottonText}/>
                  <SlideButton navigation={navigation}/>
                  
             </View>
         </View>
        </SafeAreaView>
     
          
        </>
    )
}

export default Landing;



