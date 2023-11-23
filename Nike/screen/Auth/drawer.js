import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import {
  MaterialCommunityIcons,
  Feather,
  SimpleLineIcons,
} from "@expo/vector-icons";
import discover from "../discover/discover";
import shop from "../shop/shopHome";
import order from "../order/order";
import favorites from "../Favorites/favorites";


const Drawer = createDrawerNavigator();

export default function MyDrawer({ navigation }) {
  return (
    <Drawer.Navigator
      useLegacyImplementation={false}
      screenOptions={{
        headerStyle:{height:50,backgroundColor:"white"},
      }}
      drawerContent={(props) => {
        return (
          <SafeAreaView style={{ flex: 1 }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("user");
              }}
            >
              <View
                style={{
                  width: "100%",
                  height: 300,
                  alignItems: "center",
                  paddingVertical: 30,
                  borderBottomWidth: 1,
                  borderColor: "#C8C8C8",
                  marginBottom: 10,
                }}
              >
                <Image
                  style={{ height: 200, width: 200, borderRadius: 100 }}
                  source={require("../../assets/Image_User/1.jpg")}
                />
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: 25,
                  }}
                >
                  Phạm Thanh Sơn
                </Text>
              </View>
            </TouchableOpacity>
            <DrawerItemList {...props} />
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                position: "absolute",
                bottom: 10,
                left: 10,
                backgroundColor: "black",
                width: "90%",
                height: 40,
                borderRadius: 10,
                paddingHorizontal: 20,
              }}
              onPress={() => {
                navigation.navigate("signin");
              }}
            >
              <SimpleLineIcons name="logout" size={24} color="white" />
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  marginHorizontal: 20,
                  color: "white",
                }}
              >
                Logout
              </Text>
            </TouchableOpacity>
          </SafeAreaView>
        );
      }}
    >
      <Drawer.Screen
        name="Discover"
        component={discover}
        options={{
          drawerIcon: () => <Feather name="home" size={24} color="black" />,
        }}
      />
      <Drawer.Screen
        name="Shop"
        useLegacyImplementation
        component={shop}
        options={{
          
          drawerIcon: () => (
            <MaterialCommunityIcons
              name="archive-search-outline"
              size={24}
              color="black"
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Order"
        component={order}
        options={{
          drawerIcon: () => <Feather name="archive" size={24} color="black" />,
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={favorites}
        options={{
          drawerIcon: () => <Feather name="heart" size={24} color="black" />,
        }}
      />
    </Drawer.Navigator>
  );
}
