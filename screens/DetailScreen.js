import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import MyIcon from 'react-native-vector-icons/MaterialIcons';
import MyIconIon from 'react-native-vector-icons/Ionicons';
import React, { createContext, useEffect, useState,useContext } from "react";
export var ListOrderContexts = createContext();
import { useIsFocused } from "@react-navigation/native";
import { ListOrderContext } from "./HomeScreen";
import ShoesView from "./ShoesView";
export default function DetailScreen( {navigation, route} ) {
    const { product } = route.params;
    // const isFocused = useIsFocused();
    const [listProduct, setListProduct] = useState([]);
    const [listOrders, setListOrders] = useState([]);
    const [image, setImage] = useState("");
    // var {  = useContext(ntext);
    var { listOrder } = useContext(ListOrderContext);
    const [listProductTemp, setListProductTemp] = useState([]);
    const [rerender, setRerender] = useState(false);

    useEffect(() => {
        // set
        // setimage(product.anhSanPham);
        // setListProduct(product);
        setListOrders(listOrder);
        setListProductTemp(product.danhSachMau)
        // console.log("alo product: ", product);
       
    }, [product, listOrder])



    // useEffect(() => {
    //     setListRender(product)
    // }, [product])
    
    
    ListOrderContexts = createContext({ listOrders: listOrders });
    function addList() {
        // var obj = product;
        // // obj["anhThayThe"] = image;
        // obj["soLuong"] = "1";
        // setListOrders([...listOrders]);
        // console.log("ww",obj);
        navigation.navigate('Screen6');
      }

     function changeColor(index) {
            var temp = listProductTemp[index].image;
            setImage(temp);
            setRerender(!rerender);
     } 


  return (
    <View style={styles.container}>
         <ListOrderContexts.Provider
                value={{ listOrders: listOrders }}
              ></ListOrderContexts.Provider>
              <View style={styles.header}>
              
                    <TouchableOpacity  onPress={() => navigation.navigate('BottomTabScreens')} >
                        <MyIcon style={styles.iconStyleS} name='arrow-back' />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Screen6')}>
                        <MyIcon style={styles.iconStyle} name='shopping-cart' />
                    </TouchableOpacity>

                </View>
     {/* {listRender.map((item, index) => ( */}
     {/* <FlatList
                        style={{flex: 1}}
                        data={listRender}
                        renderItem={renderItem} 
   
                // }}
                keyExtractor={(item,index) => index}
    /> */}
                <Text style={styles.logo}>{product.tenSanPham}</Text>
                <Text style={styles.logoX}>Women's shoes</Text>
                <Text style={styles.productPrice}>${product.donGia}</Text>

                {/* <Image style={styles.productImg} source={{uri: product.anhSanPham}} /> */}
                <View style={{ flex:1, justifyContent:'center',alignItems:'center',flexDirection:'row',top: 100}}>
                    <ShoesView ></ShoesView>
                </View>

                <View style={styles.productListColor}>
                     <FlatList
                        data={listProductTemp}
                        horizontal={true}
                        keyExtractor={(item,index) => index}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity style={styles.itemTile} onPress={() => {changeColor(index)}}>
                                <View style={styles.itemTitleImg}>
                                        <Image  source={{uri: item.image}} style={{width: 100, height: 100}}/>
                                </View>
                                {/* <View style={styles.itemTitleImg}>
                                        <Image  source={{uri: item.image3}} style={{width: 30, height: 30, resizeMode: "contain"}}/>
                                </View> */}
                            </TouchableOpacity>
                        )}
                    />
                </View>

                <View style={styles.productInfo}>
                    <Text style={styles.productInfoTxt}>{product.moTa}</Text>
                    {/* {console.log("alo",product.moTa)} */}
                    <TouchableOpacity>
                        <Text style={styles.productInfoBtn}>Read more</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.bottomBtn}>
                    <TouchableOpacity>
                        <MyIconIon  style={styles.iconStyle} name='heart-outline' />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnBuyBorder}  onPress={() => {addList()
                    }}>
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
    marginBottom:20,
    marginVertical:10,
},
iconStyle: {
    fontSize: 30,
    // borderWidth: 1,
    borderRadius: 90,
    padding: 10,
    backgroundColor: "#F5F6FA",
},
iconStyleS: {
    fontSize: 30,
    // borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    backgroundColor: "#F5F6FA",
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
    height: 100,
    // marginVertical: 80,
    marginTop: 180,
    marginLeft: 20
},
productInfo:{
    width: '100%',
    margin:20,
    height: 90,
},
productInfoBtn:{
    width:'100%',
    marginLeft:300,
    color:'#949494',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
},
productInfoTxt:{
    color:'#949494',
    marginRight:30,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
},
bottomBtn:{
    flexDirection:'row',
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    marginBottom:20,
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
},
itemTile: {
    height: 70,
    backgroundColor: '#e6e6e6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    marginLeft: 20,
    padding: 20,
    borderRadius: 15,
    

},
itemTitleImg: {
    width: 50,
    height: 50,
    // backgroundColor: 'white',
    padding: 5,
    alignItems: "center",
    justifyContent: "center"
    // resizeMode: "contain"
},

});
