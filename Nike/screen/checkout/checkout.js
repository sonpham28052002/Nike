import React from "react";
import ProductItem from "./product_item";
import { RadioGroup, RadioButton } from "react-native-ui-lib";
import { user } from "../../user";
import {
  View,
  Button,
  FlatList,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
export default function checkout() {
  const windowHeight = Dimensions.get("window").height;
  console.log(windowHeight);

  console.log(user);
  var ref = React.useRef();
  var [check, setCheck] = React.useState(true);
  let i = 0;
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ flex: 1, height: "100%" }}>
        <View style={{ maxHeight: 645, paddingHorizontal: 10 }}>
          <FlatList
            data={user.bags}
            keyExtractor={() => {
              return i++;
            }}
            renderItem={({ item }) => {
              return <ProductItem value={item} />;
            }}
          />
        </View>
        <View
          style={{
            height: 100,
            width: "100%",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            alignItems: "center",
            justifyContent: "center",
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            shadowColor: "#000",
            shadowOffset: {
              width: 10,
              height: 1,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.0,
            elevation: 24,
          }}
        >
          <Text
            style={{ fontSize: 20, fontStyle: "italic", fontWeight: "600" }}
          >
            Total: 100,000,000 VNĐ
          </Text>
          <TouchableOpacity
            style={{
              height: 40,
              width: "80%",
              marginTop: 10,
              backgroundColor: "red",
              borderRadius: 50,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => ref.current.open()}
          >
            <Text
              style={{
                fontWeight: "bold",
                textAlign: "center",
                fontSize: 20,
                color: "white",
              }}
            >
              Payment
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <RBSheet
        ref={ref}
        height={300}
        openDuration={250}
        customStyles={{
          container: {
            borderTopEndRadius: 20,
            borderTopStartRadius: 20,
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <Text style={{ fontSize: 20, fontStyle: "italic", fontWeight: "600" }}>
          Total: 100,000,000 VNĐ
        </Text>
        <RadioGroup
          initialValue={check}
          onValueChange={(item) => setCheck(item)}
        >
          <RadioButton
            containerStyle={{ marginVertical: 5 }}
            labelStyle={{ fontWeight: "bold" }}
            value={true}
            label={"Thanh Toán Khi Nhận Hàng"}
          />
          <RadioButton
            containerStyle={{ marginVertical: 5 }}
            labelStyle={{ fontWeight: "bold" }}
            value={false}
            label={"Thanh Toán Online (VNPAY)"}
          />
        </RadioGroup>
        <Button title="OPEN BOTTOM SHEET" onPress={() => ref.current.close()} />
      </RBSheet>
    </View>
  );
}
