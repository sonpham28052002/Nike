import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Splash from "../splash_screen/splash_screen.js";
import sign_in from "../sign_in/sign_in.js";

var Stack = createNativeStackNavigator();
var Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen component={sign_in} name="1" />
      <Tab.Screen component={sign_in} name="2" />
      <Tab.Screen component={sign_in} name="3" />
      <Tab.Screen component={sign_in} name="4" />
      <Tab.Screen component={sign_in} name="5" />

    </Tab.Navigator>
  );
}

export default function app() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen component={Splash} name="splash_screen" />
        <Stack.Screen component={Home} name="Home" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
