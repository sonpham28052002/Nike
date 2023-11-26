import { View, Text, FlatList, ActivityIndicator } from "react-native";
import Card from "../cardProduct/card";
import { useSelector } from "react-redux";
import React from "react";
import { getProductByID } from "../../service/ProductService";
export default function favorites() {
  var user = useSelector((state) => state.data);
  console.log(user)
  var [listProduct, setListProduct] = React.useState([]);
  var loading = false;
  React.useEffect(() => {
    var products = [];
    user.favorites.map((item) => {
      getProductByID((data) => {
        products.push(data);
      }, item);
    });
    setListProduct(products);
  }, [user.favorites]);
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={listProduct}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Card value={item} user={user} />}
      />
    </View>
  );
}
