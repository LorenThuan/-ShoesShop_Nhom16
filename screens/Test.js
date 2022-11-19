import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, TouchableOpacity, ImageBackground,Animated} from 'react-native';
import React, { useRef, useEffect } from 'react';
export default function Test({navigation}) {
    const fadeAnim = useRef(new Animated.Value(0)).current 
  
   const FadeInView =() => {
      Animated.timing(
        fadeAnim,
        {
          toValue:1000,
          duration: 5000,
          useNativeDriver:false,
        }
      ).start();
    };
  return (
    <View style={styles.container}>
        <Animated.View style={{
            flex:1, 
        marginTop:fadeAnim,
        justifyContent:'center',
            }}>
            <ImageBackground source={require("../assets/icon.png")} style={styles.img}></ImageBackground>
            </Animated.View>
        <TouchableOpacity style={styles.btn} onPress={FadeInView}>
                <Text style={{fontSize:18,fontWeight:'bold',color:'white'}}>Login</Text>
            </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1483C2',
    justifyContent:'flex-end',
    alignItems:'center',
  },
  img:{
    width:100,
  height:100,

},
btn:{
    flex:0.1,
    margin:15,
    borderRadius:15,
    backgroundColor:'#3D8AD1',
    justifyContent:'center',
    alignItems:'center',
    marginBottom:50
 }
});