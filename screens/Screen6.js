import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Image,
    FlatList,
    Alert,
    Dimensions,
    ImageBackground
  } from "react-native";
  import React, { useContext, useEffect, useState } from "react";
  import {
    Ionicons,
    SimpleLineIcons,
    MaterialCommunityIcons,
    MaterialIcons,
    Entypo,
    Feather,
    AntDesign
  } from "@expo/vector-icons";
  import colors from "./color";
  import { TextInput } from "react-native-paper";
  import { useIsFocused } from "@react-navigation/native";
  import { ListOrderContexts } from "./DetailScreen";
  const {width, height} = Dimensions.get("window");

  export default function Screen6({ navigation }) {
    const [tabChoose, setTabChoose] = useState(true);
    const [listRender, setListRender] = useState([]);
    const [rerender, setRerender] = useState(false);
    var { listOrders } = useContext(ListOrderContexts);
    const isFocused = useIsFocused();
    useEffect(() => {
      setListRender(listOrders);
      var priceNow = 0;
      listOrders.forEach((e) => {
        priceNow += e.soLuong * e.donGia;
      });
      setItemTotal(priceNow.toFixed(2));
      var delivaryCharge = 0.1 * priceNow.toFixed(2);
      setDelivaryCharge(delivaryCharge.toFixed(2) + "")
      if (itemTotal === 0.00) {
        delivaryCharge = 0.00
        setDelivaryCharge(0.00 + "")
      }
      var totalPriceNow = (priceNow + delivaryCharge).toFixed(2);
      setTotalPrice(totalPriceNow + "");
     console.log(listRender);
    }, [isFocused, rerender]);

    function add(index) {
      var soLuong = Number.parseInt(listRender[index].soLuong) + 1;
      listOrders[index].soLuong = soLuong + "";
      setRerender(!rerender);
    }
    function sub(index) {
      var soLuongNow = Number.parseInt(listRender[index].soLuong);
      if (soLuongNow == 1) {
        Alert.alert("Warning", "Do you want to delete it?", [
          {
            text: "No",
            onPress: () => {},
            style: "cancel",
          },
          {
            text: "Yes",
            onPress: () => {
              listOrders.splice(index, 1);
              // var donGia = listRender[index].donGia
              // var tinhTienLai =  Number.parseInt(totalPrice) - donGia 
              // setDelivaryCharge(0.00 + "")
              // setTotalPrice(tinhTienLai + "")
              setRerender(!rerender);
            },
          },
        ]);
      } else {
        var soLuong = Number.parseInt(listRender[index].soLuong) - 1;
        listOrders[index].soLuong = soLuong + "";
        setRerender(!rerender);
      }
    }
    const [delivaryCharge, setDelivaryCharge] = useState("0.00");
    //   const [VAT, setVAT] = useState("2.6");
      const [totalPrice, setTotalPrice] = useState("120.00");
      const [itemTotal, setItemTotal] = useState("110.00");

    function deleteItem(index) {
      Alert.alert("Warning", "Do you want to delete it?", [
        {
          text: "No",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            listOrders.splice(index, 1);
            // var donGia = Number.parseInt(listRender[index].donGia)
            // var tinhTienLai =  Number.parseInt(totalPrice) - donGia 
            // setDelivaryCharge(0.00 + "")
            // setTotalPrice(tinhTienLai + "")
            setRerender(!rerender);
          },
        },
      ]);
    }
    
    // item
  
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("HomeScreen");
            }}
          style={styles.btnGoBack}>
            <Ionicons name="arrow-back" size={28} color="black" />
          </TouchableOpacity>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>Cart</Text>
          <View style={{ width: 45 }}></View>
        </View>

        <ScrollView nestedScrollEnabled={true}>
          {/* <View style={{}}>

          </View> */}
        {listRender.map((item, index) => (
        <View style={styles.halfTop}>


          <View>
           
              <View style={styles.items} >
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.bgImg}>
                  <Image
                        source={{ uri: item.anhSanPham}}
                        style={{ width: 150, height: 150, alignItems: "center", justifyContent: "center"}}
                      />
                  </View>
                    
            
                  <View style={{ marginLeft: 15, justifyContent: "space-around", width: "50%"}}>
                    <Text style={{ fontWeight: "bold", fontSize: 15 , marginTop: 20}}>
                        {item.tenSanPham}
                    </Text>
                    <Text style={{ color: "#8F959E", fontWeight: "400", fontSize: 18 }}>
                      ${item.donGia}
                    </Text>
                    <View style={{flexDirection: "row", justifyContent: "space-between"}}>

                        <View  style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "60%"}}>
                        <TouchableOpacity onPress={() => {sub(index)}}>
                                <Entypo name="chevron-with-circle-down" size={32} color="#8F959E" />
                            </TouchableOpacity>
                            <Text style={{fontWeight: "bold", size: 20}}>{item.soLuong}</Text>
                            <TouchableOpacity onPress={() => {add(index)}}>
                                <Entypo name="chevron-with-circle-up" size={32} color="#8F959E" />
                            </TouchableOpacity>
                        </View>
                    
                      <TouchableOpacity onPress={() => {deleteItem(index)}}>
                              <MaterialCommunityIcons name="delete-circle-outline" size={32} color="#8F959E"/>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              
              </View>
          
          </View>
    
        </View>
       ))}
        <View style={styles.center}>
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                    <Text style={{fontSize: 20, fontWeight: "bold"}}>
                          Delivery Address
                    </Text>
                    <Entypo name="chevron-small-right" size={32} color="black" />
            </View>
            
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 20}}>
              <View>
              <ImageBackground source={require('../assets/Rectangle584.png')} style={{width: 70, height: 70, justifyContent: "center", alignItems: "center"}}>
                      <View style={{width: 30, height: 30, borderRadius: 50, backgroundColor: "#FF7043", justifyContent: "center", alignItems: "center"}}>
                          <Feather name="map-pin" size={15} color="white" />
                      </View>
                     
              </ImageBackground>
                    
              </View>

              <View style={{flexDirection: "row"}}>
                    <Text style={{fontSize: 20, color: "#8F959E", fontWeight: "400"}}>43, Electronics City Phase 1, {"\n"}Electronics City</Text>
              </View>

              <TouchableOpacity>
              <AntDesign name="checkcircle" size={32} color="#4AC76D" />
              </TouchableOpacity>

                    
            </View>


        </View>

        <View style={styles.centerBottom}>
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                    <Text style={{fontSize: 20, fontWeight: "bold"}}>
                          Payment Method
                    </Text>
                    <Entypo name="chevron-small-right" size={32} color="black" />
            </View>
            
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 20}}>
              <View style={{flexDirection: "row"}}>
              <View style={{width: 70, height: 70, justifyContent: "center", alignItems: "center", backgroundColor: "#F5F6FA", borderRadius: 20}}>
                          <Text style={{fontSize: 20, color: "#3D93F8", fontWeight: "bold"}}>VISA</Text>
              </View>
              <View style={{flexDirection: "column", justifyContent: "center", marginLeft: 20}}>
                    <Text style={{fontSize: 20}}>Visa Classic</Text>
                    <Text style={{fontSize: 20, color: "#8F959E", fontWeight: "400"}}>**** 7690</Text>
              </View>
              </View>


              <TouchableOpacity>
              <AntDesign name="checkcircle" size={32} color="#4AC76D" />
              </TouchableOpacity>

                    
            </View>


        </View>

        <View style={styles.bottomTop}>
                    <Text style={{fontSize: 20, fontWeight: "bold"}}>
                          Order Info
                    </Text>

                <View style={{justifyContent: "center", marginTop: 20}}>
                        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                              <Text style={{fontSize: 18, color: "#8F959E", fontWeight: "400"}}>Subtotal</Text>
                              <Text style={{fontSize: 20, fontWeight: "bold"}}>${itemTotal}</Text>
                        </View>

                        <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 10}}>
                              <Text style={{fontSize: 18, color: "#8F959E", fontWeight: "400"}}>Delivery Charge</Text>
                              <Text style={{fontSize: 20, fontWeight: "bold"}}>${delivaryCharge}</Text>
                        </View>

                        <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 20}}>
                              <Text style={{fontSize: 18, color: "#8F959E", fontWeight: "400"}}>Total</Text>
                              <Text style={{fontSize: 20, fontWeight: "bold"}}>${totalPrice}</Text>
                        </View>
                </View>
                                
        </View>

      <View style={styles.bottom}>
              <TouchableOpacity style={{justifyContent: "center", alignItems: "center", backgroundColor: "#278AE4", height: "100%"}} onPress={() => navigation.navigate('Screen7')}>
                      <Text style={{fontSize: 20, color: "white", fontWeight: "bold"}}>Checkout</Text>
              </TouchableOpacity>
      </View>

      </ScrollView>

      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white"
    },
    halfTop: {
      backgroundColor: "#FEFEFE",
      // paddingHorizontal: 30,
      height: height/6,
      marginHorizontal: 20,
      borderRadius: 20,
      height: 180,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.00,

      elevation: 24,
    },
    center: {
      // paddingHorizontal: 30,
      height: height/6,
      marginHorizontal: 20,
      // borderRadius: 20,
      height: 120,
      marginVertical: 25
    },
    centerBottom: {
      // paddingHorizontal: 30,
      height: height/6,
      marginHorizontal: 20,
      // borderRadius: 20,
      height: 120,
      // marginVertical: 5
    },
    bottomTop: {
      height: height/6,
      marginHorizontal: 20,
      height: 160,
      marginVertical: 20
    },
    bottom: {
      height: height/6,
      marginHorizontal: 15,
      height: 70,
      marginVertical: 20
    },
    header: {
      flexDirection: "row",
      height: 40,
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "white",
      paddingHorizontal: 30,
      marginVertical: 50,
      
    },
    viewTab: {
      flexDirection: "row",
      backgroundColor: colors.lightDarkGrey,
      borderRadius: 10,
    },
    tabChoose: {
      width: "50%",
      alignItems: "center",
      padding: 10,
      borderRadius: 10,
      backgroundColor: colors.lightBrown,
    },
    txtChoose: {
      color: "white",
      fontWeight: "bold",
    },
    tabNoChoose: {
      width: "50%",
      alignItems: "center",
      padding: 10,
      borderRadius: 10,
    },
    items: {
      flexDirection: "row",
      // marginBottom: 50,
      justifyContent: "space-between",
      marginLeft: 20
    },
    btnGoBack: {
      height: 55,
      width: 55,
      backgroundColor: "#F5F6FA",
      borderRadius: 50,
      justifyContent: "center",
      alignItems: "center"
    },
    bgImg: {
      justifyContent: "center", alignItems: "center",
      backgroundColor: "#F5F6FA",
      marginTop: 15,
      height: 150,
      borderRadius: 20,
      width: 150
    },
  });
  