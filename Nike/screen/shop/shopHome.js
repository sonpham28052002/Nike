import { View, TouchableOpacity } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Shop from "./shop";
import SneakerWeek from "./sneakerWeek";
import BestSeller from "./bestSeller";
import Discount from "./discount";
import ShopAll from "./shopAll";
import { Feather, FontAwesome } from "@expo/vector-icons";
import styles from "./style";
import { Badge } from "@rneui/base";

const Stack = createNativeStackNavigator();
const shopHome = ({ navigation ,route}) => {
  //user
  var user = route.params
  console.log(navigation);
  return (
    // <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerStyle: { height: 50 },
        headerTitleStyle: styles.textItem,
        headerRight: () => {
          return (
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity>
                <FontAwesome style={{}} name="search" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={{ marginHorizontal: 20 }}>
                <Feather name="shopping-bag" size={24} color="black" />
                <Badge
                  status="primary"
                  value={10}
                  containerStyle={{ position: "absolute", top: -5, left: 10 }}
                />
              </TouchableOpacity>
            </View>
          );
        },
      }}
    >
      <Stack.Screen
        name="Shop"
        initialParams={navigation}
        component={Shop}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Sneakers of the Week"
        component={SneakerWeek}
        initialParams={navigation}
      />
      <Stack.Screen name="Best Sellers" component={BestSeller} />
      <Stack.Screen name="Discount" component={Discount} />
      <Stack.Screen name="Shop All" component={ShopAll} />
    </Stack.Navigator>
  );
};

export default shopHome;
