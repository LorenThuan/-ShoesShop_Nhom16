import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, TouchableOpacity, ImageBackground, Switch} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import React,{useState} from 'react';

export default function Login({navigation}) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.header} onPress={() => {navigation.navigate('Test')}}>
            <AntDesign name="arrowleft" size={24} color="black" />    
        </TouchableOpacity>
        <View style={styles.wel}>
            <Text style={{textAlign:'center',fontSize:30,fontWeight:'bold'}}>WelCome</Text>
             <Text style={{textAlign:'center',fontSize:18,color:'gray',fontWeight:'bold'}}>Please enter your data to continue</Text>
        </View>
        <View style={styles.content}>
            <View style={styles.wrapcontent}>
                <Text style={{color:'gray',fontSize:18}}>Username</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                    <Text style={{fontSize:18}}>Tranhoanglong720@gmail.com</Text>
                    <AntDesign name="check" size={24} color="green" />
                </View>
            </View>
            <View style={styles.wrapcontent}>
                <Text style={{color:'gray',fontSize:18}}>Password</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                    <Text style={{fontSize:18}}>HJ@#9783kja</Text>
                    <Text  style={{color:'green',fontSize:18}}>Strong</Text>
                </View>
            </View>
            <View style={{alignItems:'flex-end',marginTop:10}}>
                <Text style={{color:'red',fontSize:18}}>Forgot password?</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <Text style={{fontSize:18,textAlign:'center'}} >Remember me</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "green" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}     
                />
            </View>
            
        </View>
       <View style={styles.bot}>
            <Text style={{fontSize:18,color:'gray'}}>By connecting your account confirm that you agree{"\n"} with our<Text style={{color:'black',fontWeight:'bold'}}> Term and Condition</Text> </Text>
            <TouchableOpacity style={styles.btn} onPress={() => {navigation.navigate('BottomTabScreens')}}>
                <Text style={{fontSize:18,fontWeight:'bold',color:'white'}}>Login</Text>
            </TouchableOpacity>
       </View>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#1483C2',
    justifyContent:'space-between'
  },
 header:{
    flex:0.1,
    marginTop:50,
    justifyContent:'space-around',

 },
 wel:{
    margin:10,
 },
 wrapcontent:{
    margin:10,
    backgroundColor:'#EEEEEE',
 },
 content:{
    marginTop:100,
 },
 bot:{
    flex:1,
   
    justifyContent:'flex-end'
 },
 btn:{
    flex:0.3,
    margin:15,
    borderRadius:15,
    backgroundColor:'#3D8AD1',
    justifyContent:'center',
    alignItems:'center',
    marginBottom:50
 }
});