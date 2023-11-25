import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
// import { user } from "../../user";
import Cart_item from "./cart_item";
import { ScrollView } from "react-native";
import { useSelector } from "react-redux";
const App = () => {
  var user = useSelector((state)=> state.data)
  console.log(user.bags);
  var [bags, setBags] = React.useState(user.bags);
  var [selectCheckout, setSelectCheckout] = React.useState([]);
  var [total, setTotal] = React.useState(0);
  const windowHeight = Dimensions.get("window").height;

  React.useEffect(() => {
    console.log("selectCheckout");
    console.log(selectCheckout);
    if (selectCheckout.length != 0) {
      if (selectCheckout.length == 1) {
        let total =
          selectCheckout[0].product.price * selectCheckout[0].quantity;
        setTotal(total);
      } else {
        let total = 0
        selectCheckout.map((item)=> {
          total+=item.product.price * item.quantity
        })
        setTotal(total);
      }
    }else{
      setTotal(0)
    }
  }, [selectCheckout]);
  var totalView = total.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  let i = 0;
  return (
    <View style={{height:"100%" }}>
      <View style={{maxHeight:585}}>
        <ScrollView style={{ padding: 10, }}>
          <FlatList
            data={bags}
            keyExtractor={() => {
              i += 1;
              return i;
            }}
            renderItem={({ item }) => {
              return (
                <Cart_item
                  value={item}
                  onpressPushBag={(data) => {
                    if (
                      selectCheckout.filter((item) => item === data).at(0) ==
                      undefined
                    ) {
                      let bagCheckout = [...selectCheckout, data];
                      setSelectCheckout(bagCheckout);
                    }
                  }}
                  onpressRemoveBag={(data) => {
                    let bagCheckout = selectCheckout.filter((item) => {
                      return item !== data;
                    });
                    setSelectCheckout(bagCheckout);
                  }}
                  onpressUpdateBag={(data, dataOld) => {
                    console.log("update");
                    let bagCheckout = [...selectCheckout];
                    let index = selectCheckout.indexOf(dataOld);
                    bagCheckout[index] = data;
                    setSelectCheckout(bagCheckout);
                  }}
                />
              );
            }}
          />
        </ScrollView>
      </View>
      <View
        style={{
          height: 110,
          width: "100%",
          alignItems: "center",
          justifyContent: "flex-start",
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
          shadowColor: "#000",
          shadowOffset: {
            width: 12,
            height: 1,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.0,
          elevation: 24,
        }}
      >
        <Text
          style={{
            alignItems: "center",
            fontSize: 20,
            fontWeight: "bold",
            fontStyle: "italic",
          }}
        >
          {" "}
          Total: {totalView}
        </Text>
        <TouchableOpacity
          style={{
            height: 40,
            width: "80%",
            marginVertical: 10,
            borderRadius: 50,
            backgroundColor: "black",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <FontAwesome5 name="cart-arrow-down" size={24} color="white" />
          <Text
            style={{
              fontWeight: "900",
              fontSize: 22,
              fontStyle: "italic",
              textAlign: "center",
              color: "white",
              paddingLeft: 20,
            }}
          >
            CHECK OUT
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;
