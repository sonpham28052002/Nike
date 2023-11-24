import { StyleSheet } from "react-native";
var styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
    width:"100",
    alignItems: "center",
  },
  TextInput: {
    height: 45,
    width: "100%",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "",
    marginVertical: 5,
    paddingLeft: 40,
    paddingRight:10,
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
    width: "200%",
    height:"120%",
    position:"absolute",
    left:"-50%",
    top:20,          
  },
  title: {
    fontSize: 30,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 10,
    fontStyle:"italic"
  },
  viewSub: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  textError: { marginTop: -10, fontWeight: "bold" },
  icon: { position: "absolute", top: 15, left: 10 },
});

export { styles };
