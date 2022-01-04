import {  SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, Button, NativeModules, TextInput, TouchableOpacity,  } from 'react-native';
import {AsyncStorage} from '@react-native-async-storage/async-storage'

import {fetchCheck, registration, signIn} from './api';
import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
//import { TextInput } from 'react-native-gesture-handler';

const { StatusBarManager } = NativeModules;

/*API calls field*/

  //fetchCheck();
  //registration();
/*API calls field*/

function Hell(){
  
}

export default function App() {
  
  const [name, setName] = useState("");
  const [pswd, setPswd] = useState("");

  const onRegPress = () => {
    registration();
    setName('');
    setPswd('');
  }

  const onSignPress = () => {
    signIn();
    setName('');
    setPswd('');
  }

  global.login = name;
  global.password = pswd;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.menu}>
          <TextInput style = {styles.txtBox} placeholder='Введите логин' value={name} onChangeText={(value) => setName(value)}></TextInput>
          <TextInput style = {styles.txtBox} placeholder='Введите пароль' value={pswd} secureTextEntry={true} onChangeText={(value) => setPswd(value)}></TextInput>

          <View style={styles.btnBlock}>
            <TouchableOpacity style={styles.confirmBtn} onPress={onRegPress}>
              <Text style={styles.confirmBtnTxt}>привет, {login}! В шарарам?</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.confirmBtn}>
              <Text style={styles.confirmBtnTxt} onPress={onSignPress}>Я уже смешарик!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'silver',
  },
  txtBox: {
      marginTop: 10,
      borderRadius: 1,
      backgroundColor: "pink",
  },
  confirmBtn: {
    marginTop: 10,
    backgroundColor: "#007aff",
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 30,
    flex: 1,
    justifyContent: 'space-evenly'

  },
  confirmBtnTxt:{
    fontSize: 24,
    fontWeight: '400',
    color: "#fff",
  },
  btnBlock: {
    flex: 2,
    flexDirection: 'column',
    height: 100,
  },
  menu: {
    height: 200,
  },
  
});
