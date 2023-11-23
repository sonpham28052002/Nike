import { StyleSheet } from "react-native";

var styles = StyleSheet.create({
  card: {
    width: "45%",
    height: 250,
    borderWidth: 1,
    borderRadius: 10,
    padding: 1,
    margin: 3,
  },
  imageProduct: {
    height: 150,
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor:"white"
  },
  textStar: {
    fontSize: 10,
    fontWeight: "500",
    marginLeft: 5,
    fontStyle: "italic",
    color: "gray",
  },
  imageDiscount: { height: 60, width: 60, position: "absolute", right: 5 },
  textPrice:{
    fontWeight: "400",
    fontSize: 12,
    textDecorationLine: "line-through",
    color: "gray",
    fontWeight: "500",
  },boxShadown: {
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 14,
  },
});
export { styles };
