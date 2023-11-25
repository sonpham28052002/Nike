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
import { HelperText, Checkbox } from "react-native-paper";
import { Dialog } from "@rneui/themed";
import { FIREBASE_AUTH } from "../../config_Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { getAPI } from "../../redux-toolkit/slices";
export default function sign_in({ navigation }) {
  const auth = FIREBASE_AUTH;
  var [email, setEmail] = React.useState("sonpham28052002@gmail.com");
  var [password, setPassword] = React.useState("sonpham28052002");
  var [checked, setCheck] = React.useState(false);
  var [isLoading, setLoading] = React.useState(false);
  var [visibleError, setVisibleError] = React.useState(false);
  var [visibleErrorPass, setVisibleErrorPass] = React.useState(false);

  var data = useSelector((state) => state);
  var dispatch = useDispatch();
  var login = async (email, password) => {
    setLoading(true);
    if (hasErrorEmail() && hasErrorPassword()) {
      try {
        const response = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        if (!response.user.emailVerified) {
          setVisibleError(true);
        }
        dispatch(getAPI(response.user.uid));
        setLoading(true);
        navigation.navigate("Home")
      } catch (error) {
        setVisibleErrorPass(true);
        setLoading(false);
      }
    }
    setLoading(false);
  };
  const hasErrorEmail = () => {
    return email == undefined || email.includes("@");
  };
  const hasErrorPassword = () => {
    return (
      password == undefined ||
      (password.length >= 6 && /^[a-zA-Z0-9]+$/.test(password))
    );
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
        <Text style={styles.title}>WELCOME</Text>
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

        <View>
          <TextInput
            style={[styles.TextInput]}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Entypo
            name="lock-open"
            style={styles.icon}
            size={25}
            color="black"
          />
        </View>
        {hasErrorPassword() || (
          <HelperText style={styles.textError} type="error">
            Error:phải có ít nhất 6 ký tự và có cả số và chữ!!!
          </HelperText>
        )}
        <View style={styles.viewSub}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Checkbox
              style={{ height: 10 }}
              status={checked ? "checked" : "unchecked"}
              onPress={() => setCheck(!checked)}
              color="black"
            />
            <Text style={{ fontWeight: "500" }}>Remember</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("forgot");
            }}
          >
            <Text
              style={{ fontWeight: "500", textDecorationLine: "underline" }}
            >
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => {
            login(email, password);
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
            onPress={() => {
              navigation.navigate("signup");
            }}
          >
            <Text style={{ fontWeight: "bold" }}> Sign Up</Text>
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
        isVisible={visibleError}
        onBackdropPress={() => {
          setVisibleError(!visibleError);
        }}
      >
        <Dialog.Title
          titleStyle={{ color: "red", textAlign: "center" }}
          title="Đăng Nhập Thất Bại"
        />
        <Text>
          Email đã được đăng kí tài khoản. Vui lòng truy vào email để xác thực
          tài khoản.
        </Text>
      </Dialog>
      <Dialog
        overlayStyle={{ borderRadius: 20 }}
        isVisible={visibleErrorPass}
        onBackdropPress={() => {
          setVisibleErrorPass(!visibleErrorPass);
        }}
      >
        <Dialog.Title
          titleStyle={{ color: "red", textAlign: "center" }}
          title="Đăng Nhập Thất Bại"
        />
        <Text>Mật khẩu không chính xác vui lòng thử lại sau.</Text>
      </Dialog>
    </View>
  );
}
