import React from "react";
import { View, Text, Image } from "react-native";
import { getImage } from "../../function/getImage";

export default function productItem(props) {
  var [bag, setBag] = React.useState(props.value);
  var [product, setProduct] = React.useState(bag.product);

  var price = product.price.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  var priceDiscount = (
    product.price -
    product.price * (product.discount / 100)
  ).toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  var total = (
    (product.price - product.price * (product.discount / 100)) *
    bag.quantity
  ).toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  console.log(props.value);
  return (
    <View
      style={{
        width: "100%",
        shadowColor: "#000",
        shadowOffset: {
          width: 1,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 15,
        marginVertical:5,
        borderLeftWidth:1,
        borderRightWidth:1,
      }}
    >
      <View
        style={{
          width: "100%",
          flexDirection: "row",
        }}
      >
        <Image
          source={getImage(product.id, product.productImages[0].path)}
          resizeMode="cover"
          style={{ height: "100%", width: "45%", marginTop: 0 }}
        />
        <View style={{ paddingHorizontal: 10, paddingTop: 10, width: "55%" }}>
          <Text
            style={{ fontWeight: "bold", fontSize: 20, fontStyle: "italic" }}
          >
            {product.name}
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontWeight: "600", color: "gray" }}>
              Size: {bag.size}
            </Text>
            <Text style={{ fontWeight: "600", color: "gray" }}>
              Quantity: {bag.quantity}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              {priceDiscount}
            </Text>
            {product.discount == 0 || (
              <Text
                style={{
                  fontWeight: "500",
                  fontSize: 15,
                  fontStyle: "italic",
                  color: "green",
                }}
              >
                - {product.discount} %
              </Text>
            )}
          </View>
          {product.discount == 0 || (
            <Text
              style={{
                fontWeight: "500",
                fontSize: 15,
                fontStyle: "italic",
                color: "gray",
                textDecorationLine: "line-through",
              }}
            >
              {price}
            </Text>
          )}
          <Text style={{ color: "gray" }} numberOfLines={2}>
            Discription: {product.description}
          </Text>
        </View>
      </View>
      <View style={{ padding: 10 }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 15,
            color: "red",
            fontStyle: "italic",
            textDecorationLine: "underline",
            textAlign:"right"
          }}
        >
          Total: {total}
        </Text>
      </View>
    </View>
  );
}
