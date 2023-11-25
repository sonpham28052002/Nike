import { StyleSheet } from "react-native";

var styles = StyleSheet.create({
  swipeable: {
    width: "100%",
    height: 120,
    marginBottom: 10,
    borderEndWidth: 5,
    borderStartWidth: 1,
  },
  boxShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  viewCart_Item: {
    height: 120,
    width: "100%",
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: { height: 180, width: 180, marginTop: -40, marginLeft: -5 },
  name: {
    fontWeight: "bold",
    fontSize: 20,
    fontStyle: "italic",
    width: 190,
  },
  tag: {
    fontSize: 10,
    fontWeight: "500",
    color: "gray",
    width: 100,
  },
  price: {
    fontWeight: "700",
    fontSize: 11,
    color: "gray",
    fontStyle: "italic",
    textDecorationLine: "line-through",
  },
  priceDiscount: { fontWeight: "700", fontSize: 13 },
  imageDiscount: {
    height: 60,
    width: 60,
    position: "absolute",
    top: 0,
    right: 10,
  },
  buttonView: {
    height: 30,
    width: 100,
    position: "absolute",
    bottom: 10,
    right: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

export { styles };
