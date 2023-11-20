import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

var styles = StyleSheet.create({
  image: {
    height: 220,
    width: width,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    padding: 20,
    marginBottom: 5,
  },
  textTilte: {
    fontWeight: "900",
    fontSize: 20,
    color: "white",
    width: "90%",
    textAlign: "left",
  },
  textButton: {
    fontWeight: "600",
  },
  button: {
    backgroundColor: "white",
    height: 30,
    width: 80,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  viewInfo: {
    width: "70%",
    position: "absolute",
    bottom: 10,
    left: 20,
  },
});

export { styles };
