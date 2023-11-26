import React from "react";
import {
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Platform,
  Dimensions,
  FlatList,
  Image,
} from "react-native";
import { List } from "react-native-paper";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import { AirbnbRating, Badge } from "@rneui/themed";
import { Rating } from "react-native-ratings";
import { AntDesign, FontAwesome5, FontAwesome } from "@expo/vector-icons";
import { style } from "./style";
import { getImage } from "../../function/getImage";
import { useDispatch, useSelector } from "react-redux";
import { getAPI, putAPI } from "../../redux-toolkit/slices";
import { calcStar } from "../../function/calculator";
import { putBag } from "../../service/UserService";
import { searchProduct } from "../../service/ProductService";

//<==================Import======================================>
export default function App({ navigation, route }) {
  var user = useSelector((state) => state.data);
  var dispatch = useDispatch();
  var [product,setProduct] = React.useState(route.params);

  const { width, height } = Dimensions.get("window");
  var start_feelBack = calcStar(product.feedbacks);
  //<=======================handle==========================>
  var price = (
    product.price -
    product.price * (product.discount / 100)
  ).toLocaleString("vi-VN", { style: "currency", currency: "VND" });
  var priceDiscount = product.price.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  var [product_color,setProductColor] = React.useState([]);
  React.useEffect(()=>{
    searchProduct((data)=>{
      setProductColor(data)
    },product.name,10)
  },[])
  var [selectColor, setSelectColor] = React.useState(1);
  var [quantity, setQuantity] = React.useState(1);
  var [selectSize, setSelectSize] = React.useState(product.productSizes[0].id);
  var [maxQuantity, setMaxQuantity] = React.useState(
    product.productSizes.filter((item, index) => item.id === selectSize).at(0)
      .quantity
  );
  var [favories, setFavories] = React.useState(
    user.favorites.includes(Number.parseInt(product.id))
  );

  //<=================View============================>
  return (
    <View style={style.container1}>
      <ScrollView style={style.container}>
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 50,
            backgroundColor: "#DCD2D3",
            borderBottomRightRadius: 25,
            borderBottomLeftRadius: 25,
          }}
        >
          <SwiperFlatList
            autoplay
            autoplayDelay={5}
            autoplayLoop
            index={1}
            data={product.productImages}
            showPagination={true}
            style={{ width: "100%" }}
            paginationStyleItem={{
              marginTop: 15,
              height: 5,
              width: 15,
              marginHorizontal: 5,
            }}
            renderItem={({ item }) => {
              return (
                <Image
                  style={[
                    style.image,
                    {
                      marginTop: item.path == "4.png" ? 10 : -70,

                      transform:
                        item.path == "4.png" ? [{ rotate: "90deg" }] : "",
                    },
                  ]}
                  resizeMode="cover"
                  source={getImage(product.id, item.path)}
                />
              );
            }}
          ></SwiperFlatList>
        </View>
        <View style={style.viewInFo}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <Text style={style.name}>{product.name}</Text>
            <View
              style={{
                width: "25%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 5,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  quantity == 1
                    ? setQuantity(quantity)
                    : setQuantity(quantity - 1);
                }}
              >
                <AntDesign
                  name="minuscircleo"
                  size={24}
                  color={product.colorStyle}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  color: product.colorStyle,
                }}
              >
                {quantity}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  quantity == maxQuantity
                    ? setQuantity(quantity)
                    : setQuantity(quantity + 1);
                }}
              >
                <AntDesign
                  name="pluscircleo"
                  size={24}
                  color={product.colorStyle}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={[style.oneLine, {}]}>
            <Rating
              type="custom"
              ratingCount={5}
              startingValue={start_feelBack}
              readonly={true}
              imageSize={20}
              style={{ marginRight: 10 }}
            />
            <Text style={style.feedbacks}>
              {Number.parseFloat(start_feelBack).toFixed(1)}*
            </Text>
            <Text style={{ color: "blue", fontWeight: 500 }}>
              {" "}
              ({product.feedbacks.length}+ Reviews)
            </Text>
          </View>
          <View style={style.viewDescription}>
            <Text
              style={{ fontWeight: "700", color: "gray", fontStyle: "italic" }}
            >
              Tag: {product.tag.split(",").join(" ")}
            </Text>
            <Text numberOfLines={3} style={style.textDescription}>
              {product.description}
            </Text>
            <TouchableOpacity>
              <Text style={{ fontWeight: 500 }}>Read More...</Text>
            </TouchableOpacity>
          </View>
          <View
            style={[
              style.oneCol,
              {
                borderRadius: 10,
                borderWidth: Platform.OS === "android" ? 1 : 0,
                borderColor: Platform.OS === "android" ? "#DCD2D3" : "",
              },
              Platform.OS === "android" ? "" : style.boxShadown,
            ]}
          >
            <Text style={style.textHeaderSize}>Choose Size: </Text>
            <FlatList
              style={{ width: "100%" }}
              data={product.productSizes}
              keyExtractor={(item) => item.id}
              extraData={selectSize}
              numColumns={8}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    disabled={item.quantity == 0 ? true : false}
                    style={[
                      style.itemSize,
                      {
                        backgroundColor:
                          item.quantity == 0
                            ? "#DCD2D3"
                            : selectSize == item.id
                            ? "gray"
                            : "white",
                      },
                    ]}
                    onPress={() => {
                      setSelectSize(item.id);
                      setQuantity(1);
                      let id = item.id;
                      setMaxQuantity(
                        product.productSizes
                          .filter((item) => item.id === id)
                          .at(0).quantity
                      );
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: 700,
                        color:
                          item.quantity == 0
                            ? "white"
                            : selectSize != item.id
                            ? "black"
                            : "white",
                      }}
                    >
                      {item.id}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <View
            style={[
              style.oneCol,
              {
                borderRadius: 10,
                borderWidth: Platform.OS === "android" ? 1 : 0,
                borderColor: Platform.OS === "android" ? "#DCD2D3" : "",
                marginTop: 20,
              },
              Platform.OS === "android" ? "" : style.boxShadown,
            ]}
          >
            <Text style={style.textHeaderSize}>Choose Color:</Text>
            <FlatList
              style={{ width: "100%" }}
              data={product_color}
              horizontal={true}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                  onPress={()=>{
                    setProduct(item)
                  }}
                  >
                    <ImageBackground
                      style={[style.itemShadown, style.imageProduct, {}]}
                      source={getImage(item.id, "3.png")}
                      resizeMode="cover"
                    />
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <View style={[style.oneCol, { width: "100%", padding: 0 }]}>
            <List.Accordion
              style={{ width: width - 50, height: 55, margin: 0 }}
              titleStyle={{ fontWeight: "bold" }}
              title="Size & FIT"
            >
              <List.Item
                titleStyle={{
                  marginLeft: 20,
                  fontSize: 15,
                  fontWeight: "500",
                  textDecorationLine: "underline",
                }}
                title="Size Guide"
              />
            </List.Accordion>
            <List.Accordion
              style={{ width: width - 50, height: 55, margin: 0 }}
              titleStyle={{ fontWeight: "bold" }}
              title={"Reviews (" + product.feedbacks.length + ")"}
            >
              <List.Item
                left={(props) => (
                  <ScrollView>
                    <View>
                      <FlatList
                        style={{ width: 380, paddingHorizontal: 10 }}
                        data={product.feedbacks}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => {
                          return (
                            <View
                              key={item.id}
                              style={{
                                width: "100%",
                                padding: 20,
                              }}
                            >
                              <View
                                style={{
                                  flexDirection: "row",
                                  justifyContent: "space-between",
                                  alignItems: "flex-end",
                                }}
                              >
                                <Text style={[style.titleItemFeelBack]}>
                                  {item.user.name}
                                </Text>
                                <Text
                                  style={[
                                    style.titleItemFeelBack,
                                    { fontSize: 11 },
                                  ]}
                                >
                                  {new Date(item.date).toISOString()}
                                </Text>
                              </View>
                              <AirbnbRating
                                count={5}
                                showRating={false}
                                defaultRating={item.star}
                                size={15}
                                starContainerStyle={{ marginHorizontal: 20 }}
                              />
                              <Text>{item.comment}</Text>
                            </View>
                          );
                        }}
                      />
                    </View>
                  </ScrollView>
                )}
              />
            </List.Accordion>
            <List.Accordion
              style={{ width: width - 50, height: 55 }}
              titleStyle={{ fontWeight: "bold" }}
              title="Information More"
            >
              <Text
                style={{
                  paddingHorizontal: 20,
                  fontSize: 13,
                  textAlign: "justify",
                  lineHeight: 24,
                  fontWeight: "600",
                }}
              >
                {"\t" + product.information}
              </Text>
            </List.Accordion>
          </View>
        </View>
      </ScrollView>
      <View
        style={[
          style.bar,
          {
            shadowColor: "#000",
            shadowOffset: { width: 0, height: -12 },
            shadowOpacity: 0.2,
            shadowRadius: 10,
            elevation: 24,
            alignItems: "center",
            justifyContent: "center",
          },
        ]}
      >
        <View
          style={[
            style.oneLine,
            {
              marginTop: 0,
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            },
          ]}
        >
          <TouchableOpacity
            style={[style.buttonAddFavouries, { backgroundColor: "black" }]}
            onPress={() => {
              if (favories) {
                let a = { ...user };
                a.favorites = user.favorites.filter(
                  (item) => item != product.id
                );
                dispatch(putAPI(a));
                setFavories(false);
                setUser(a);
              } else {
                let b = { ...user };
                b.favorites = [...user.favorites, product.id];
                dispatch(putAPI(b));
                setFavories(true);
                setUser(b);
              }
            }}
          >
            {favories ? (
              <AntDesign name="heart" size={24} color="red" />
            ) : (
              <AntDesign name="hearto" size={24} color="white" />
            )}
          </TouchableOpacity>
          <Text style={[style.price]}>{price}</Text>
          <TouchableOpacity
            style={style.buttonAddCart}
            onPress={() => {
              let bag = {
                quantity: quantity,
                size: selectSize,
              };
              putBag(bag, user.id, product.id).then(() => {
                dispatch(getAPI(user.id));
              });
            }}
          >
            <Text style={style.textButtonAddCart}>Add To Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={{ position: "absolute", top: 15, right: 80 }}
        onPress={() => {
          navigation.navigate("Favorites");
        }}
      >
        <AntDesign name="hearto" size={24} color="white" />
        <Badge
          status="success"
          containerStyle={{ position: "absolute", top: -10, right: -20 }}
          value={user.favorites.length}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{ position: "absolute", top: 15, right: 30 }}
        onPress={() => {
          navigation.navigate("cart");
        }}
      >
        <FontAwesome5 name="cart-plus" size={25} color="black" />
        <Badge
          status="success"
          containerStyle={{ position: "absolute", top: -10, right: -20 }}
          value={user.bags.length}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{ position: "absolute", top: 15, left: 10 }}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <AntDesign name="left" size={25} color="black" />
      </TouchableOpacity>
    </View>
  );
}
