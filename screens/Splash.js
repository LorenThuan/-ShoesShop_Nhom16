import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, TouchableOpacity, ImageBackground} from 'react-native';

export default function Splash({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{flex:1,justifyContent:'center',marginTop:100,marginLeft:10}}>
      <Text style={{color:'white',fontWeight:'bold',fontSize:50,}}>You Have The{"\n"} Power To</Text>
      <Text style={{color:'white',fontWeight:'bold',fontSize:50,}}>Just Do It.</Text>

      </View>
      
      <View style={{ flex:0.9,alignItems:'center',justifyContent:'center'}}>
      <ImageBackground source={require('../assets/AnhSplash.png')} style={styles.img}>
        <TouchableOpacity style={styles.btn} onPress={() => {navigation.navigate('Login')}}>
        <Text style={{fontSize:20,fontWeight:'900'}}>Get Started</Text>
        </TouchableOpacity>
        </ImageBackground>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1483C2',
  },
  img:{
    width:"100%",
  height:"110%",
  marginBottom:80,
},btn:{
   borderWidth:1,
  borderRadius:15,
  borderColor:'white',
  backgroundColor:'white',
  marginRight:200,
  justifyContent:'center',
  alignItems:'center',
  padding:5,
  marginBottom:4,
  marginLeft:10,
}
});