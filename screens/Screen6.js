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
//   import { ListOrderContext } from "./Home";
  import { useIsFocused } from "@react-navigation/native";
  const {width, height} = Dimensions.get("window");

  export default function Screen6({ navigation }) {
    const [tabChoose, setTabChoose] = useState(true);
    const [listRender, setListRender] = useState([]);
    const [rerender, setRerender] = useState(false);
    // var { listOrder } = useContext(ListOrderContext);
    const isFocused = useIsFocused();
    // useEffect(() => {
    //   setListRender(listOrder);
    //   var priceNow = 0;
    //   listOrder.forEach((e) => {
    //     priceNow += e.amount * e.price;
    //   });
    //   setPrice(priceNow.toFixed(2));
    //   var totalPriceNow = (priceNow + 1).toFixed(2);
    //   setTotalPrice(totalPriceNow + "");
    // }, [isFocused, rerender]);
    // function add(index) {
    //   var amount = Number.parseInt(listRender[index].amount) + 1;
    //   listOrder[index].amount = amount + "";
    //   setRerender(!rerender);
    // }
    // function sub(index) {
    //   var amountNow = Number.parseInt(listRender[index].amount);
    //   if (amountNow == 1) {
    //     Alert.alert("Warning", "Do you want to delete it?", [
    //       {
    //         text: "No",
    //         onPress: () => {},
    //         style: "cancel",
    //       },
    //       {
    //         text: "Yes",
    //         onPress: () => {
    //           listOrder.splice(index, 1);
    //           setRerender(!rerender);
    //         },
    //       },
    //     ]);
    //   } else {
    //     var amount = Number.parseInt(listRender[index].amount) - 1;
    //     listOrder[index].amount = amount + "";
    //     setRerender(!rerender);
    //   }
    // }
    const [price, setPrice] = useState("4.53");
    const [fee, setFee] = useState("1.0");
    const [feeOri, setFeeOri] = useState("2.0");
    const [totalPrice, setTotalPrice] = useState("5.53");
    // item
  
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          style={styles.btnGoBack}>
            <Ionicons name="arrow-back" size={28} color="black" />
          </TouchableOpacity>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Cart</Text>
          <View style={{ width: 45 }}></View>
        </View>

        <ScrollView nestedScrollEnabled={true}>
          <View style={{}}>

          </View>
        <View style={styles.halfTop}>


          <View>
            {/* {listRender.map((item, index) => ( */}
              <View style={styles.items} >
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.bgImg}>
                  <Image
                        source={{ uri: "https://res.cloudinary.com/drve4pmbe/image/upload/v1668578490/ImageOnThiThucHanh/image7_dfrh4k.png" }}
                        style={{ width: 150, height: 150, alignItems: "center", justifyContent: "center"}}
                      />
                  </View>
                    
            
                  <View style={{ marginLeft: 15, justifyContent: "space-around", width: "55%"}}>
                    <Text style={{ fontWeight: "bold", fontSize: 15 , marginTop: 20}}>
                        Nike Metcon 7
                    </Text>
                    <Text style={{ color: "#8F959E", fontWeight: "400", fontSize: 18 }}>
                      $99
                    </Text>
                    <View style={{flexDirection: "row", justifyContent: "space-between"}}>

                        <View  style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "60%"}}>
                        <TouchableOpacity>
                                <Entypo name="chevron-with-circle-down" size={32} color="#8F959E" />
                            </TouchableOpacity>
                            <Text style={{fontWeight: "bold", size: 20}}>1</Text>
                            <TouchableOpacity>
                                <Entypo name="chevron-with-circle-up" size={32} color="#8F959E" />
                            </TouchableOpacity>
                        </View>
                    
                      <TouchableOpacity>
                              <MaterialCommunityIcons name="delete-circle-outline" size={32} color="#8F959E" />
                      </TouchableOpacity>
                      
                         
                    </View>
                  </View>
                </View>
             
              </View>
            {/* ))} */}
          </View>

        </View>

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
                              <Text style={{fontSize: 20, fontWeight: "bold"}}>$110</Text>
                        </View>

                        <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 10}}>
                              <Text style={{fontSize: 18, color: "#8F959E", fontWeight: "400"}}>Delivery Charge</Text>
                              <Text style={{fontSize: 20, fontWeight: "bold"}}>$10</Text>
                        </View>

                        <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 20}}>
                              <Text style={{fontSize: 18, color: "#8F959E", fontWeight: "400"}}>Total</Text>
                              <Text style={{fontSize: 20, fontWeight: "bold"}}>$120</Text>
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
      height: 100,
      marginVertical: 20
    },
    header: {
      flexDirection: "row",
      height: 20,
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
      height: 45,
      width: 45,
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
  