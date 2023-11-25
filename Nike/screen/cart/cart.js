import React from "react";
import { ScrollView } from "react-native";
import { View, Text, Image } from "react-native";
import { Drawer } from "react-native-ui-lib";
import { product } from "../Favorites/product";
export default function cartItem() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ marginHorizontal: 10, marginVertical: 5 }}>
        <Drawer
          rightItems={[
            {
              text: "Read",
              background: "blue",
              onPress: () => console.log("read pressed"),
            },
          ]}
          leftItem={{
            text: "Delete",
            background: "red",
            onPress: () => console.log("delete pressed"),
          }}
        >
          <View
            style={{
              height: 100,
              width: "100%",
              padding: 4,
              backgroundColor: "gray",
              flexDirection:"row",justifyContent:"space-between", alignItems:"center"
            }}
          >
            <View style={{height:"100%", width:"50%", alignItems:"center", backgroundColor:"red"}}>
              <Image
                style={{ height: 100, width:100}}
                resizeMode="cover"
                source={require("../../product_image/18/1.png")}
              />
            </View>
          </View>
        </Drawer>
      </ScrollView>
    </View>
  );
}
