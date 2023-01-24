import { StyleSheet } from "react-native";

import { Dimensions } from "react-native";

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const ExternalStyle = StyleSheet.create({
 safeView:{
    backgroundColor:'#1a1924',
 
 },
 mainView:{
        backgroundColor:'#1a1924',
        height: height,
    },
    buttonsContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
        
    },
    buttonsHeaderView:{
         padding:20
    },

    buttonsHeaderViewText:{
        color:'#a1ac19',
        fontSize:17,
        fontWeight:'500'
    },
    defaultButton:{
     
        width: width * 0.9,
        padding: 15,
        alignItems:'center',
        color:'red',
        borderRadius:11


    },
    defaultButtoText:{
      color:'#6eb1f7',
      fontWeight:'500'
    },
    greyButton:{
        marginTop:height * 0.02,
        backgroundColor:'#34424a',
        width: width * 0.9,
        padding: 15,
        alignItems:'center',
        color:'red',
        borderRadius:11
    },
    skyBlueBotton:{
        marginTop:height * 0.02,
        backgroundColor:'#6eb1f7',
        width: width * 0.9,
        padding: 15,
        alignItems:'center',
        color:'red',
        borderRadius:11,
        
    },
    skyBlueBottonText:{
        color:'white',
        fontWeight:'500'
    }


})




export default ExternalStyle;