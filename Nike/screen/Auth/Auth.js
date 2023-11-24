import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../splash_screen/splash_screen.js";
import sign_in from "../sign_in/sign_in.js";
import sign_up from "../sign_up/sign_up.js";
import forgot from "../forgot/forgot.js";

import drawer from "./drawer.js";
import user from "../user/user.js";
var Stack = createNativeStackNavigator();

var users = {
  id: "LIyeiaXumRYLnMzzIscCbOngRYU2",
  name: "Nguyễn Thanh Sơn",
  email: "anhsonzzvn@gmail.com",
  address: null,
  image: null,
  status: false,
  bag: null,
  favorites: null,
};

export default function app() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen component={Splash} name="splash_screen" />
        <Stack.Screen component={drawer} name="Home" initialParams={users} />
        <Stack.Screen component={sign_in} name="signin" />
        <Stack.Screen component={sign_up} name="signup" />
        <Stack.Screen component={forgot} name="forgot" />
        <Stack.Screen component={user} name="user" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
