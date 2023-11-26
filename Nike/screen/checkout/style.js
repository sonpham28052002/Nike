import { StyleSheet } from "react-native";

var styles = StyleSheet.create({
  container: {
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
  },
  buttonPayment: {
    height: 40,
    width: "80%",
    marginTop: 10,
    backgroundColor: "red",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  textButtonPayment: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
    color: "white",
  },
  textTotal: {
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "600",
    textAlign: "center",
    textDecorationLine: "underline",
  },
});
export default styles;
