import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


const Button = ({onPress,ButtonStyle,title, textStyle}) =>{
    return(
        <>
            <TouchableOpacity style={[ButtonStyle]} activeOpacity={0.2}>
                <Text style={[textStyle]}>
                    Press Me
                </Text>
            </TouchableOpacity>
         
        </>
    )
}

export default Button;

const styles  = StyleSheet.create({
    buttonText:{
        color:"#6eb1f7"
    }
})