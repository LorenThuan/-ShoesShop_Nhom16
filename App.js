import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Easing} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator, TransitionSpecs, CardStyleInterpolators } from "@react-navigation/stack";
import Splash from './screens/Splash';
import Login from './screens/Login';
import Test from './screens/Test';
import DetailScreen from './screens/DetailScreen';
import HomeScreen from './screens/HomeScreen';
import Screen6 from './screens/Screen6';
import Screen7 from './screens/Screen7';
import BottomTabScreens from './screens/BottomTabScreens';
const Stack = createStackNavigator();
const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  }
}

const closeConfig = {
  animation: 'timing',
  config: {
    duration: 200,
    easing: Easing.linear,
  }
}
const customTransition = {
  gestureEnabled: true,
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  cardStyleInterpolator: ({ current, next, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            })
          },
          {
            rotate: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: ["180deg", "0deg"],
            }),
          },
          {
            scale: next ?
              next.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0.7],
              }) : 1,
          }
        ]
      },
      opacity: current.opacity,
    }
  }
}
export default function App() {
  // const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false,
    //  transitionSpec: {
    //   open: config,
    //   close: closeConfig,
    // },
    // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    // headerMode:"screen",
    ...customTransition,
    }}
    
    >   
      <Stack.Screen name="Splash" component={Splash} options={{
          transitionSpec: {
            open: config,
            close: closeConfig,
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
     
        }} />  
      <Stack.Screen name='Login' component={Login}  options={{
          transitionSpec: {
            open: config,
            close: closeConfig,
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        
        }} />
        <Stack.Screen name='Test' component={Test}     
       />
<Stack.Screen name='BottomTabScreens' component={BottomTabScreens} />
<Stack.Screen name='HomeScreen' component={HomeScreen}     
      />
      <Stack.Screen name='DetailScreen' component={DetailScreen}     
       />
   
       <Stack.Screen name='Screen6' component={Screen6}     
      />
       <Stack.Screen name='Screen7' component={Screen7}     
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});