import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import TextArea from './components/TextArea/TextArea.component';
import Error from './components/error/error.component';
import anime from "./assets/anime.jpg";
import { useFonts } from 'expo-font';



export default function App() {
  let [fontsLoaded] = useFonts({
    'QanelasBlack' : require("./assets/fonts/QanelasBlack.otf"),
  });

  if (!fontsLoaded) {
    return <Error/>;
  } else {
  return (
    <View style={styles.container}>
      <Image source = {anime} style = {{ width: 300, height : 160}} />
      {/*  прикол в том что в браузере пикча есть, а на телефоне нет :( */}
      <View style = {styles.contentWrapper}>
      <Text style = {styles.textHeader}>Добро пожаловать</Text>
      
      <Text style = {styles.lightbottomText}>
        Шарага в рб
      </Text>
      <Text style = {styles.bottomText}>
        Пес, добро пожаловать. Место
        где раскрывают способности
      </Text>
      <View styles = {styles.inputbox}>
          <Image source = {anime} />
         </View>
      <TextArea/>
      
      </View>
      </View>
    
    
  );
      }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems : "center",
    alignContent : "center",
    alignSelf: "center",
    backgroundColor: '#FFF',
    
  },
  contentWrapper : { 
    alignContent : "center",
    justifyContent : "center",
    alignSelf : "center",
    fontFamily : ""

  },
  inputbox : {
    alignItems: "center",
    justifyContent : "center",
    alignContent : "center",
  },
  lightbottomText: {
    fontFamily: 'QanelasBlack',
    paddingTop: 20,
    fontStyle : "normal",
    fontWeight : "500",
    fontSize : 17,
    lineHeight : 22,
    paddingLeft: 10,
    letterSpacing: -0.41,
    color : "#232740"
  },
  textHeader : {
    fontFamily: 'QanelasBlack',
    fontStyle : "normal",
    fontWeight : "bold",
    fontSize : 34,
    lineHeight : 41,
    color : "#282828",
    paddingLeft:20
  },
  bottomText : {
    fontFamily: 'QanelasBlack',
    paddingTop: 20,
    paddingLeft: 5,

    fontStyle : "normal",
    fontWeight : "normal",
    fontSize : 20,
    lineHeight : 25,
    letterSpacing: 0.38,
    color : "#282828"
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
  stretch: {
    width: 50,
    height: 200,
    resizeMode: 'stretch',
  },
});


