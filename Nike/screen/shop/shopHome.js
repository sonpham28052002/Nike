import { View, TouchableOpacity } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from '@react-navigation/native';
import Shop from "./shop";
import SneakerWeek from "./sneakerWeek";
import BestSeller from "./bestSeller";
import Discount from "./discount";
import ShopAll from "./shopAll";
import GiftForYou from "./giftForYou";
import OurBestSellers from "./ourBestSellers";
import TopRoad from "./topRoad";
import JustIn from "./justIn"
import Brand from "./brand";
import Search from "./search";
import ShowListCard from "./showListCard";
import { Feather, FontAwesome } from "@expo/vector-icons";
import styles from "./style";
import { Badge } from "@rneui/base";

const Stack = createNativeStackNavigator();
const shopHome = ({ navigation, route }) => {
  //user
  var user = route.params
  console.log(navigation);
  const navigate = useNavigation()
  return (
    // <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerStyle: { height: 50 },
        headerTitleStyle: styles.textItem,
        headerRight: () => {
          return (
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
              onPress={()=>navigate.navigate("Search", navigation)}>
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
      {/*  The week's highlight */}
      <Stack.Screen name="Sneakers of the Week" component={SneakerWeek}/>
      <Stack.Screen name="Best Sellers" component={BestSeller} />
      <Stack.Screen name="Discount" component={Discount} />
      <Stack.Screen name="Shop All" component={ShopAll} />

      {/* Gift That Move You */}
      <Stack.Screen name="Gift For You" component={GiftForYou} />

      {/* Our BestSellers */}
      <Stack.Screen name="Our BestSellers" component={OurBestSellers} />

      {/* Top Road */}
      <Stack.Screen name="Top Road" component={TopRoad} />

      {/* JustIn */}
      <Stack.Screen name="Just In" component={JustIn} />

      {/* Brand */}
      <Stack.Screen name="Brand" component={Brand} />

      {/* Search */}
      <Stack.Screen name="Search" component={Search} />

      {/* Show List Card */}
      <Stack.Screen name="Show List Card" component={ShowListCard} />
    </Stack.Navigator>
  );
};

export default shopHome;
