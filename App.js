/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useEffect, useState} from 'react';


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Platform,
  Alert
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from './src/Navigation/Routes';

import EmulatorChecker from './EmulatorChecker';
import CustomNotice from './src/Components/CustomNotice';

import { Dimensions } from "react-native";

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;


import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const Stack = createNativeStackNavigator();

function App() {

  const [showNotice, setShowNotice] = useState(true);

  const isEmulator = (Platform.OS === 'android' && Platform.isEmulator) || (Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS && !Platform.isTVOS && !Platform.isTesting);
  console.log(isEmulator);


  if(isEmulator){
    const timer = setTimeout(() => {
      setShowNotice(false);
      clearTimeout(timer);
    }, 3000);
  }
  
  return (
    <>

      {showNotice && (
        <SafeAreaView>
          <CustomNotice
            text="The app is running on emulator"
            style={styles.noticeText}
           
          />
        </SafeAreaView>
      )}
    
    
   
      <Provider store={store}>
        <Routes />
      </Provider>
    
    </>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  noticeText:{
    textAlign:'center'
  },
  noticeView:{
    width: width * 0.5,
    alignSelf:'center'
  }

});

export default App;
