import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { getImage } from "../../function/getImage";
import { getImageDiscount } from "../../function/getImageDiscount";
import { styles } from "./style";
import { Checkbox } from "react-native-paper";
import currency from "currency.js";
import { Swipeable } from "react-native-gesture-handler";
const App = (props) => {
  var [bag, setBag] = React.useState(props.value);
  var [quantity, setQuantity] = React.useState(bag.quantity);
  var [product, setProduct] = React.useState(bag.product);
  var [size, setSize] = React.useState(bag.size);
  var [select, setSelect] = React.useState(false);
  var quantityMax = product.productSizes.filter((item) => item.id == size)[0];
  var price = currency(product.price, {
    symbol: "đ",
    separator: ",",
    precision: 0,
  }).format();
  var priceDiscount = currency(
    product.price - product.price * (product.discount / 100),
    { symbol: "đ", separator: ",", precision: 0 }
  ).format();

  React.useEffect(() => {}, [bag]);
  return (
    <Swipeable
      containerStyle={[
        styles.boxShadow,
        styles.swipeable,
        { borderColor: select ? "red" : "black" },
      ]}
      renderRightActions={() => (
        <TouchableOpacity
          style={{ width: 50, backgroundColor: "red" }}
        ></TouchableOpacity>
      )}
      renderLeftActions={() => (
        <TouchableOpacity
          style={{ width: 30, justifyContent: "center", alignItems: "center" }}
        >
          <Checkbox
            status={select ? "checked" : "unchecked"}
            onPress={() => {
              if (select) {
                props.onpressRemoveBag(bag);
              } else {
                props.onpressPushBag(bag);
              }
              setSelect(!select);
            }}
          />
        </TouchableOpacity>
      )}
    >
      <View style={[styles.viewCart_Item]}>
        <View style={[{ height: "100%" }, styles.boxShadow]}>
          <Image
            style={[styles.image]}
            resizeMode="cover"
            source={getImage(product.id, product.productImages[0].path)}
          />
        </View>
        <View
          style={{
            height: "100%",
            width: "58%",
            padding: 10,
          }}
        >
          <Text numberOfLines={1} style={[styles.name]}>
            {product.name}
          </Text>
          <Text style={[styles.tag]} numberOfLines={1}>
            {product.tag}
          </Text>
          <Text style={[styles.priceDiscount]}>{priceDiscount}</Text>
          <Text style={[styles.price]}>{price}</Text>
          <Text style={{ fontWeight: "700", marginTop: 10 }}>
            Size: {quantityMax.id}
          </Text>
          <Image
            style={[styles.imageDiscount]}
            resizeMode="contain"
            source={getImageDiscount(product.discount)}
          />
          <View style={[styles.buttonView]}>
            <TouchableOpacity
              onPress={() => {
                if (quantity - 1 >= 1) {
                  let newBag = { ...bag };
                  newBag.quantity = quantity - 1;
                  console.log(newBag);
                  if (select) {
                    props.onpressUpdateBag(newBag, bag);
                  }
                  setQuantity(quantity - 1);
                  setBag(newBag);
                }
              }}
            >
              <AntDesign name="minussquareo" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>{quantity}</Text>
            <TouchableOpacity
              onPress={() => {
                if (quantity + 1 <= quantityMax.quantity) {
                  let newBag = { ...bag };
                  newBag.quantity = quantity + 1;
                  console.log(newBag);
                  if (select) {
                    props.onpressUpdateBag(newBag, bag);
                  }
                  setQuantity(quantity + 1);
                  setBag(newBag);
                }
              }}
            >
              <AntDesign name="plussquareo" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Swipeable>
  );
};

export default App;
