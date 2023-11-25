import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../splash_screen/splash_screen.js";
import sign_in from "../sign_in/sign_in.js";
import sign_up from "../sign_up/sign_up.js";
import forgot from "../forgot/forgot.js";
import drawer from "./drawer.js";
import card from "../cardProduct/card.js";
import cart from "../cart/cart.js";
import discover from "../discover/discover.js";
import sneakerWeek from "../shop/sneakerWeek.js";
import bestSeller from "../shop/bestSeller.js";
import productDetail from "../product_detail/product_detail.js";
import user from "../user/user.js";
var Stack = createNativeStackNavigator();

export default function app() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen component={Splash} name="splash_screen" />
        <Stack.Screen component={sign_in} name="signin" />
        <Stack.Screen component={sign_up} name="signup" />
        <Stack.Screen component={forgot} name="forgot" />
        <Stack.Screen
          component={user}
          name="user"
          options={{ headerShown: true }}
        />
        <Stack.Screen component={drawer} name="Home" />
        <Stack.Screen component={card} name="card" />
        <Stack.Screen component={productDetail} name="productDetail" />
        <Stack.Screen
          component={cart}
          name="cart"
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
