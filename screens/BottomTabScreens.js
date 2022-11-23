import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Foundation,
  Ionicons,
  FontAwesome5,
  MaterialCommunityIcons,
  Feather,
  MaterialIcons,
  AntDesign
} from "@expo/vector-icons";
import colors from "../screens/color";
import HomeScreen from "./HomeScreen";
import Screen6 from "./Screen6";
import Screen7 from "./Screen7";

const Tab = createBottomTabNavigator();
export default function BottomTabScreens() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarHideOnKeyboard: true }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: () => {
            null;
          },
          headerTitle: () => <HomeScreen/>,
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons 
              name="home-sharp" 
              size={24} 
              color="black" 
              style={{
                color: focused ? colors.lightBlue : "#8F959E",
                paddingTop: 5,
              }}
              />
            );
          },
        }}
      />
            <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: () => {
            null;
          },
          tabBarIcon: ({ focused }) => {
            return (
              <AntDesign name="heart" 
              size={24} 
              color="black" 
              style={{
                color: focused ? colors.lightBlue : "#8F959E",
                paddingTop: 5,
              }}
              />
           
            );
          },
        }}
      />
      <Tab.Screen
        name="Screen6"
        component={Screen6}
        options={{
          tabBarLabel: () => {
            null;
          },
          headerTitle: () => <Screen6/>,
          tabBarIcon: ({ focused }) => {
            return (

              <FontAwesome5
              name="shopping-bag"
              size={24}
              color="black"
              style={{
                color: focused ? colors.lightBlue : "#8F959E",
                paddingTop: 5,
              }}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Screen07"
        component={Screen7}
        options={{
          tabBarLabel: () => {
            null;
          },
          tabBarIcon: ({ focused }) => {
            return (
              <FontAwesome5 
              name="wallet" 
              size={24} 
              color="black" 
              style={{
                color: focused ? colors.lightBlue : "#8F959E",
                paddingTop: 5,
              }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
