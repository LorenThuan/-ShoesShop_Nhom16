import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import MyIcon from 'react-native-vector-icons/MaterialIcons';
import MyIconIon from 'react-native-vector-icons/Ionicons';

import imgTemp from '../Img/shoesTemp.png'

export default function DetailScreen( {navigation} ) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
                    <TouchableOpacity  onPress={() => navigation.navigate('HomeScreen')} >
                        <MyIcon style={styles.iconStyleS} name='arrow-back' />
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <MyIcon style={styles.iconStyle} name='shopping-cart' />
                    </TouchableOpacity>

                </View>
                <Text style={styles.logo}>Nike Name</Text>
                <Text style={styles.logoX}>Women's shoes</Text>
                <Text style={styles.productPrice}>$190.5</Text>

                <Image style={styles.productImg} source={imgTemp} />

                <View style={styles.productListColor}>
                    <FlatList />
                </View>

                <View style={styles.productInfo}>
                    <Text style={styles.productInfoTxt}>This information is used to create The Pantone Color of the Year and the Pantone Fashion Color Report with the top fashion colors for the year:</Text>
                    <TouchableOpacity>
                        <Text style={styles.productInfoBtn}>Read more</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.bottomBtn}>
                    <TouchableOpacity>
                        <MyIconIon  style={styles.iconStyle} name='heart-outline' />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnBuyBorder}  onPress={() => navigation.navigate('Screen6')}>
                        <Text style={styles.btnBuyBorderTxt}>Buy Now</Text>
                    </TouchableOpacity>
                </View>
                

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',

},
header: {
    flexDirection: 'row',
    width: '100%',
    height: 80,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom:20
},
iconStyle: {
    fontSize: 30,
    borderWidth: 1,
    borderRadius: 90,
    padding: 10,
    backgroundColor: '#e6e6e6',
},
iconStyleS: {
    fontSize: 30,
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    backgroundColor: '#D9D9D9',
},
logo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom:5
},
logoX: {
    fontSize: 18,
    marginLeft: 15,
    color: 'grey',
    marginBottom: 20,
},
productPrice:{
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom:5
},
productImg:{
    width:200,
    height:200,
    alignSelf:'center'
},
productListColor:{
    width: '100%',
    height: 50,
},
productInfo:{
    width: '100%',
    margin:20,
    height: 90,
},
productInfoBtn:{
    width:'100%',
    marginLeft:300,
    color:'grey'
},
productInfoTxt:{
    color:'grey',
    marginRight:30
},
bottomBtn:{
    flexDirection:'row',
    width:'100%',
    justifyContent:'center',
    alignItems:'center'
},
btnBuyBorder:{
    marginLeft:40,
    width:'68%',
    backgroundColor:'#3F86C7',
    height: 55,
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center'
},
btnBuyBorderTxt:{
    color:'white',
    fontSize:18
}

});
