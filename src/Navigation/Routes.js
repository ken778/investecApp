import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../Screens/Home";
import Landing from "../Screens/Landing";
const Stack = createNativeStackNavigator();



const Routes = () =>{
    
    return(
        <>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Landing">
                    <Stack.Screen name="Landing" component={Landing}  options={{headerShown:false}}/>
                    <Stack.Screen name="Home" component={Home} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}


export default Routes;