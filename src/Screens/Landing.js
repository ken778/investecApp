import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../Components/Button";
import SlideButton from "../Components/SlideButton";

//importing external style sheet
import ExternalStyle from "../Style/ExternalStyle";


const Landing = ()=>{
    return(
        <>
        <StatusBar barStyle={"light-content"}/>
        <SafeAreaView style={ExternalStyle.safeView}>
         <View style={ExternalStyle.mainView}>
             <View style={ExternalStyle.buttonsContainer}>
                <View style={ExternalStyle.buttonsHeaderView}>
                     <Text style={ExternalStyle.buttonsHeaderViewText}>4 variations of a button</Text>
                </View>
                 <Button  ButtonStyle={ExternalStyle.defaultButton} textStyle={ExternalStyle.defaultButtoText}/>
                  <Button ButtonStyle={ExternalStyle.greyButton} textStyle={ExternalStyle.defaultButtoText}/>
                  <Button ButtonStyle={ExternalStyle.skyBlueBotton} textStyle={ExternalStyle.skyBlueBottonText}/>
                  <SlideButton/>
             </View>
         </View>
        </SafeAreaView>
     
          
        </>
    )
}

export default Landing;



