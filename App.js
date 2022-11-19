import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen6 from './screens/Screen6';
import Screen7 from './screens/Screen7';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
   
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Screen6" screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="Screen6" component={Screen6}/>
        <Stack.Screen name="Screen7" component={Screen7}/>
      </Stack.Navigator>
    </NavigationContainer>

     );
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
