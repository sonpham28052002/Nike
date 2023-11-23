import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { Entypo, AntDesign, MaterialIcons } from "@expo/vector-icons";
import { styles } from "./style";
import { HelperText } from "react-native-paper";
import { Dialog } from "@rneui/themed";
import { FIREBASE_AUTH } from "../../config_Firebase";
import { sendPasswordResetEmail } from "firebase/auth";
export default function forgot({navigation}) {
  const auth = FIREBASE_AUTH;
  var [email, setEmail] = React.useState(undefined);
  var [isLoading, setLoading] = React.useState(false);
  var [visibleSussecc, setVisibleSussecc] = React.useState(false);
  var [visibleError, setVisibleError] = React.useState(false);

  var login = async (email) => {
    setLoading(true);
    if (hasErrorEmail() && email != undefined) {
      try {
        await sendPasswordResetEmail(auth, email);
        setVisibleSussecc(true);
        setLoading(false);
      } catch (error) {
        setVisibleError(true);
        setLoading(false);
      }
    }
  };
  const hasErrorEmail = () => {
    return email == undefined || email.includes("@");
  };

  return (
    <View style={styles.container}>
      <Image
        style={{ height: 250, width: "100%" }}
        resizeMode="contain"
        source={require("./asset/slogon_nike.jpg")}
      />
      <Image
        style={styles.imageLogo}
        resizeMode="contain"
        source={require("./asset/favicon.png")}
      />
      <View
        style={{
          width: "100%",
          paddingHorizontal: 30,
        }}
      >
        <Text style={styles.title}>FORGOT PASSWORD</Text>
        <View>
          <TextInput
            style={[styles.TextInput]}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
          />
          <MaterialIcons
            style={styles.icon}
            name="email"
            size={25}
            color="black"
          />
        </View>
        {hasErrorEmail() || (
          <HelperText style={styles.textError} type="error">
            Error: Phải là email!!!
          </HelperText>
        )}
        <TouchableOpacity
          style={styles.Button}
          onPress={() => {
            login(email);
          }}
        >
          {isLoading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
              Login
            </Text>
          )}
        </TouchableOpacity>
        <Text style={{ textAlign: "center" }}>
          Create new account?
          <TouchableOpacity
            onPress={()=>{
              navigation.navigate("signin")
            }}
          >
            <Text style={{ fontWeight: "bold" }}> Sign In</Text>
          </TouchableOpacity>
        </Text>
        <Text style={{ textAlign: "center", fontWeight: "500", marginTop: 15 }}>
          --------------------------OR--------------------------
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: 20,
          }}
        >
          <TouchableOpacity onPress={() => {}}>
            <Entypo name="google--with-circle" size={50} color="red" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Entypo name="facebook-with-circle" size={50} color="blue" />
          </TouchableOpacity>{" "}
          <TouchableOpacity onPress={() => {}}>
            <AntDesign name="github" size={50} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <Dialog
        overlayStyle={{ borderRadius: 20 }}
        isVisible={visibleSussecc}
        onBackdropPress={() => {
          setVisibleSussecc(!visibleSussecc);
        }}
      >
        <Dialog.Title
          titleStyle={{ color: "green", textAlign: "center" }}
          title="Yêu Cầu Đổi Mật Khẩu Thành Công"
        />
        <Text>Vui lòng truy cập vào email để thay đổi lại mật khẩu.</Text>
      </Dialog>
      <Dialog
        overlayStyle={{ borderRadius: 20 }}
        isVisible={visibleError}
        onBackdropPress={() => {
          setVisibleError(!visibleError);
        }}
      >
        <Dialog.Title
          titleStyle={{ color: "red", textAlign: "center" }}
          title="Đăng Nhập Thất Bại"
        />
        <Text>Email này không phải là một email</Text>
      </Dialog>
    </View>
  );
}
