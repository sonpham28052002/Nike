import { StyleSheet, Dimensions, Platform } from "react-native";
const { width, height } = Dimensions.get("window");
var font_Name = "";
var font_Price = "Gothic-725-Black-BT";
var style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DCD2D3",
  },
  container1: {
    flex: 1,
    height: height,
    width: width,
  },
  image: {
    width: width,
    height:width - 50
  },
  viewInFo: {
    marginTop: 0,
    paddingHorizontal: 25,
    paddingTop: 30,
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingBottom: 100,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    fontFamily: font_Name,
    width: "70%",
  },
  price: {
    fontSize: 20,
    fontFamily: font_Name,
    fontWeight: "500",
    color: "white",
  },
  priceDiscount: {
    marginTop: 5,
    fontSize: 17,
    marginLeft: 10,
    textDecorationLine: "line-through",
    color: "#989898",
    fontWeight: "500",
    textDecorationStyle: "dashed",
  },
  oneLine: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: 10,
  },
  oneCol: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: 10,
    padding: 10,
  },
  feedbacks: {
    color: "#989898",
    fontWeight: "600",
  },
  textCoupon: {
    fontWeight: "600",
    fontSize: 15,
    color: "red",
    marginHorizontal: 15,
  },
  bar: {
    backgroundColor: "#000",
    height: 60,
    width: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: "absolute",
    top: Platform.OS === "android" ? height - 41 : height - 60,
    paddingHorizontal: 25,
  },
  buttonAddCart: {
    backgroundColor: "#0c0759",
    height: 40,
    width: "50%",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  textButtonAddCart: { fontSize: 17, fontWeight: "600", color: "white" },
  buttonAddFavouries: {
    height: 35,
    width: 35,
    borderRadius: 100,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  viewDescription: {
    marginTop: 15,
  },
  textDescription: {
    color: "#989898",
    fontSize: 15,
    lineHeight: 25,
    textAlign: "justify",
  },
  textHeaderSize: {
    fontWeight: "bold",
    fontSize: 17,
  },
  boxShadown: {
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 14,
  },
  imageProduct: {
    height: 100,
    width: 140,
    margin: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#DCD2D3",
  },
  itemShadown: {
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  itemSize: {
    margin: 10,
    height: 40,
    width: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#DCD2D3",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  titleItemFeelBack: {
    fontWeight: "600",
    fontSize: 19,
    color: "#989898",
  },
});

export { style };
