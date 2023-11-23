import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { AirbnbRating } from "@rneui/themed";
import currency from "currency.js";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./style";
import { getImage } from "../../function/getImage";
import { getImageDiscount } from "../../function/getImageDiscount";
import {} from "../../service/UserService";
export default function app(props) {
  var [product, setProduct] = React.useState(props.value);
  var [user, setUser] = React.useState(props.user);
  console.log(user);
  var listFavories =
    user.favorites === null || user.favorites == ""
      ? []
      : user.favorites.split(",");
  var isfavorites =
    listFavories.filter((item) => Number.parseInt(item) == product.id)[0] !=
    undefined;
  var [isFavorites, setIsFavorites] = React.useState(isfavorites);
  var star = 5;
  var price = currency(product.price, {
    symbol: "đ",
    separator: ",",
    precision: 0,
  }).format();
  var priceDiscount = currency(
    product.price - product.price * (product.coupon / 100),
    { symbol: "đ", separator: ",", precision: 0 }
  ).format();
  return (
    <TouchableOpacity style={[styles.card,styles.boxShadown]}>
      <View>
        <Image
          style={styles.imageProduct}
          resizeMode="cover"
          source={getImage(product.id, product.productImages[0].path)}
        />
        <View style={{ padding: 10 }}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }} numberOfLines={1}>
            {product.name}
          </Text>
          <Text
            numberOfLines={1}
            style={{ width: "100%", color: "gray", fontSize: 10 }}
          >
            {product.description}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "40%",
                marginLeft: -2,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <AirbnbRating
                showRating={false}
                defaultRating={star}
                size={10}
                isDisabled
              />
              <Text style={styles.textStar}>
                {Number.parseFloat(star).toFixed(1)}*
              </Text>
            </View>
            <View
              style={{
                width: "40%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Text style={{ fontSize: 10, color: "blue" }}>
                (
                {product.feedbacks.length >= 100
                  ? "+99"
                  : product.feedbacks.length}{" "}
                Reviews)
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>
              {priceDiscount}
            </Text>
            {product.coupon == 0 || (
              <Text style={styles.textPrice}>{price}</Text>
            )}
          </View>
        </View>
        <Image
          resizeMode="center"
          style={styles.imageDiscount}
          source={getImageDiscount(product.coupon)}
        />
        <TouchableOpacity
          style={{ position: "absolute", left: 10, top: 5 }}
          onPress={() => {
            if (isFavorites) {
              listFavories = listFavories.filter(
                (item) => Number.parseInt(item) != product.id
              );
              user.favorites = listFavories.join(",");
              setIsFavorites(false);
            } else {
              listFavories.push(product.id);
              user.favorites = listFavories.join(",");
              setIsFavorites(true);
            }
          }}
        >
          <AntDesign
            name={isFavorites ? "heart" : "hearto"}
            size={24}
            color={isFavorites ? "red" : "black"}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
