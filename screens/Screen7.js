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

export default function Screen7({navigation}) {
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
        </View>
                <ScrollView nestedScrollEnabled>
                <View style={{alignItems: "center", marginVertical: 70, justifyContent: "center", width: "100%"}}>
                <View style={styles.center}>
                    
                    <ImageBackground source={require('../assets/Group2.png')} style={{width: 200, height: "100%", justifyContent: "center",alignItems: "center"}}>
                          
                                <View style={{width: 170, height: 100, backgroundColor: "#F5F6FA"}}>

                                </View>
                              
                    </ImageBackground>

                
                </View>


                </View>

                <View style={{justifyContent: "center", alignItems: "center"}}>
                        <Text style={{fontSize: 35, fontWeight: "bold"}}>Order Confirmed!</Text>
                        <Text style={{color: "#8F959E", fontSize: 18 , marginVertical: 15}}>Your order has been confirmed, we will send you</Text>
                        <Text style={{color: "#8F959E", fontSize: 18 }}>confirmation email shortly.</Text>
                </View>

                <View style={styles.bottomTop}>
              <TouchableOpacity style={{justifyContent: "center", alignItems: "center", backgroundColor: "#F5F5F5", height: "100%", borderRadius: 20}} onPress={() => navigation.navigate('Screen6')}>
                      <Text style={{fontSize: 20, color: "#8F959E"}}>Go to Orders</Text>
              </TouchableOpacity>
                </View>

                <View style={styles.bottom}>
              <TouchableOpacity style={{justifyContent: "center", alignItems: "center", backgroundColor: "#278AE4", height: "100%"}} onPress={() => navigation.navigate('HomeScreen')}>
                      <Text style={{fontSize: 25, color: "white", fontWeight: "bold"}}>Continue Shopping</Text>
              </TouchableOpacity>
      </View>

                </ScrollView>


</View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  center: {
    backgroundColor: "gray",    
    height: 400,
    borderRadius: 20
  },
  bottomTop: {
    height: height/5,
    marginHorizontal: 30,
    height: 60,
    marginVertical: 70,
  },
  bottom: {
    height: height/5,
    marginHorizontal: 20,
    height: 70,
    // marginVertical: 5,
    marginBottom: 30
  },
  header: {
    flexDirection: "row",
    height: 20,
    // justifyContent: "center",
    // justifyContent: "space-between",
    backgroundColor: "white",
    paddingHorizontal: 30,
    marginVertical: 50,
    
  },
  btnGoBack: {
    height: 45,
    width: 45,
    backgroundColor: "#F5F6FA",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  },
});