import { StyleSheet } from "react-native";
var styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  TextInput: {
    height: 45,
    width: "100%",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "",
    marginVertical: 10,
    paddingHorizontal: 20,
    fontWeight: "500",
    fontSize: 15,
  },
  Button: {
    height: 40,
    width: "100%",
    borderRadius: 20,
    borderWidth: 1,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  imageLogo: {
    height: 60,
    marginTop: -35,
  },
  title: {
    fontSize: 30,
    fontWeight: "900",
    textAlign: "center",
  },
});

export { styles };
