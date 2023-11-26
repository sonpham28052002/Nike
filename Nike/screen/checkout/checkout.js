import React from "react";
import ProductItem from "./product_item";
import { RadioGroup, RadioButton } from "react-native-ui-lib";
import {
  View,
  Button,
  FlatList,
  Text,
  TouchableOpacity,
  Linking,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import RBSheet from "react-native-raw-bottom-sheet";
import styles from "./style";
import { Dialog } from "@rneui/themed";
import { useDispatch, useSelector } from "react-redux";
import Address from "../address/address";
import { postOrder, postOrderDetail } from "../../service/OrderService";
import { getAPI } from "../../redux-toolkit/slices";
import { deleteBag } from "../../service/BagResource";
export default function checkout({ navigation, route }) {
  var user = useSelector((state) => state.data);
  var dispatch = useDispatch();
  var [bags, setBags] = React.useState(route.params?.bags);
  var total = route.params?.total;
  var [check, setCheck] = React.useState(false);
  var [notifiSuccess, setnotifiSuccess] = React.useState(false);
  var [notifiFail, setnotifiFail] = React.useState(false);
  var [visibleConfirm, setVisibleConfirm] = React.useState(false);
  var [address, setAddress] = React.useState(user.address);
  var [urlPayment, setUrlPayment] = React.useState("");
  var ref = React.useRef();
  function filterDifferentObjects(array1, array2) {
    return array1.filter(
      (obj1) =>
        !array2.some(
          (obj2) =>
            obj1.product.id === obj2.product.id && obj1.size === obj2.size
        )
    );
  }
  let i = 0;
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ flex: 1, height: "100%" }}>
        <View style={{ maxHeight: 595, height: 595, paddingHorizontal: 10 }}>
          <FlatList
            data={bags}
            keyExtractor={() => {
              return i++;
            }}
            renderItem={({ item }) => {
              return <ProductItem value={item} />;
            }}
          />
        </View>
        <View style={[styles.container]}>
          <Text
            style={{ fontSize: 20, fontStyle: "italic", fontWeight: "600" }}
          >
            Total:{" "}
            {total.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </Text>
          <TouchableOpacity
            style={[styles.buttonPayment]}
            onPress={() => ref.current.open()}
          >
            <Text style={[styles.textButtonPayment]}>Payment</Text>
          </TouchableOpacity>
        </View>
      </View>
      <RBSheet
        ref={ref}
        customStyles={{
          container: {
            borderTopEndRadius: 20,
            borderTopStartRadius: 20,
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <View style={{ marginHorizontal: 30 }}>
          <Text style={[styles.textTotal, { marginVertical: 10 }]}>
            Total:{" "}
            {total.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </Text>
          <Text style={{ fontWeight: "500" }}>Name: {user.name}</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontWeight: "500" }}>Address: {address || ""}</Text>
            <TouchableOpacity
              onPress={() => {
                setVisibleConfirm(true);
              }}
            >
              <AntDesign name="edit" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <Text style={{ fontWeight: "500" }}>Phone: {user.phone}</Text>
          <Text style={{ fontWeight: "500" }}>
            Order Date: {new Date().toLocaleDateString()}
          </Text>
          <RadioGroup
            initialValue={check}
            onValueChange={(item) => setCheck(item)}
          >
            <RadioButton
              containerStyle={{ marginVertical: 5 }}
              labelStyle={{ fontWeight: "bold" }}
              value={false}
              label={"Thanh Toán Khi Nhận Hàng"}
            />
            <RadioButton
              containerStyle={{ marginVertical: 5 }}
              labelStyle={{ fontWeight: "bold" }}
              value={true}
              label={"Thanh Toán Online (VNPAY)"}
            />
          </RadioGroup>
          <Button
            title="Payment"
            style={{ borderRadius: 50, width: 400 }}
            onPress={() => {
              if (address != null) {
                let order = {
                  user: {
                    id: user.id,
                  },
                  address: address,
                  paid: false,
                };

                postOrder((data) => {
                  if (data != undefined) {
                    bags.map((item) => {
                      postOrderDetail(
                        (data) => {},
                        {
                          quantity: item.quantity,
                          price: item.product.price,
                          discount: item.product.discount,
                        },
                        data.id,
                        item.product.id
                      );
                    });
                    if (check) {
                      fetch(
                        `http://localhost:8080/payment/create_payment/amount=${total}&order_id=${data.id}`
                      )
                        .then((res) => res.json())
                        .then((a) => {
                          setUrlPayment(a.urlPayment);
                        });
                    }
                    bags.map((item) => {
                      deleteBag(
                        (data) => dispatch(getAPI(user.id)),
                        item,
                        user.id
                      );
                    });
                    setnotifiSuccess(true);
                  } else {
                    setnotifiFail(!notifiFail);
                  }
                }, order);
              }
            }}
          />
        </View>
      </RBSheet>
      <Dialog
        overlayStyle={{
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
        isVisible={visibleConfirm}
        onBackdropPress={() => {
          setVisibleConfirm(!visibleConfirm);
        }}
      >
        <Address
          callBack={(data) => {
            setAddress(data);
            setVisibleConfirm(!visibleConfirm);
          }}
        />
      </Dialog>
      <Dialog
        overlayStyle={{ borderRadius: 20 }}
        isVisible={notifiSuccess}
        onBackdropPress={() => {
          setnotifiSuccess(!notifiSuccess);
        }}
      >
        <Dialog.Title
          titleStyle={{ color: "green", textAlign: "center" }}
          title="Lập Đơn Hàng Thành Công"
        />
        <Text style={{ textAlign: "center" }}>
          Đơn Hàng Đã Được Lập Thành Công
          {!check ||
            "\n Tiếp tục thực hiện thanh toán.\nThanh toán thất bại sẽ Thanh toán khi nhận hàng"}
        </Text>
        <Button
          title={check ? "Payment" : "OK"}
          onPress={() => {
            {
              !check || Linking.openURL(urlPayment);
              setnotifiSuccess(!notifiSuccess);
              ref.current.close();
              navigation.navigate("signin");
            }
            setnotifiSuccess(!notifiSuccess);
            ref.current.close();
            navigation.navigate("signin");
          }}
        />
      </Dialog>
      <Dialog
        overlayStyle={{ borderRadius: 20 }}
        isVisible={notifiFail}
        onBackdropPress={() => {
          ref.current.clone();
          setnotifiFail(!notifiFail);
        }}
      >
        <Dialog.Title
          titleStyle={{ color: "red", textAlign: "center" }}
          title="Lập Đơn Hàng Thất Bại"
        />
        <Text style={{ textAlign: "center" }}>
          Đơn Hàng của bạn không thể lập
        </Text>
      </Dialog>
    </View>
  );
}
