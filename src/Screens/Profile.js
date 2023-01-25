import React from "react";
import { StyleSheet, Text, View } from "react-native";


const Profile = ({route}) =>{
    const {name} = route.params
    return(
        <>
       <View style={styles.nameView}>
               
               {name? (<Text  style={styles.nameText}>Hi, {name}</Text>):(<Text  style={styles.nameText}>{}</Text>)
                }
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
})

export default Profile;