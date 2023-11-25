import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ActivityIndicator,
} from "react-native";
import {
  Entypo,
  AntDesign,
  MaterialIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { styles } from "./style";
import { HelperText } from "react-native-paper";
import { Dialog } from "@rneui/themed";
import { FIREBASE_AUTH } from "../../config_Firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { postAPI } from "../../redux-toolkit/slices";
import { useDispatch, useSelector } from "react-redux";

export default function sign_up({ navigation }) {
  const auth = FIREBASE_AUTH;
  var [email, setEmail] = React.useState(undefined);
  var [name, setName] = React.useState(undefined);
  var [password, setPassword] = React.useState(undefined);
  var [rePassword, setRePassword] = React.useState(undefined);
  var [isLoading, setLoading] = React.useState(false);
  var [visibleSuccess, setVisibleSuccess] = React.useState(false);
  var [visibleError, setVisibleError] = React.useState(false);
  
  var data = useSelector((state) => state);
  var dispatch = useDispatch()
  console.log(data);
  var signup = async (email, password) => {
    setLoading(true);
    if (
      name != undefined &&
      email != undefined &&
      password != undefined &&
      rePassword != undefined &&
      hasErrorEmail() &&
      hasErrorPassword() &&
      hasErrorRePassword() &&
      hasErrorUserName()
    ) {
      try {
        const response = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await sendEmailVerification(response.user);
        let user = {
          id: response.user.uid,
          email: response.user.email,
          name: name,
          status:true
        };
        dispatch(postAPI(user))
        console.log(data.isSussecc);
        setVisibleSuccess(true);
      } catch (error) {
        setVisibleError(true);
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
  const hasErrorRePassword = () => {
    return rePassword == undefined || rePassword == password;
  };
  const hasErrorUserName = () => {
    return name == undefined || /^[a-zA-Z0-9]{6,}$/.test(name);
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          marginTop: -30,
        }}
      >
        <Image
          style={styles.imageLogo}
          resizeMode="contain"
          source={require("./asset/favicon.png")}
        />
        <Image
          style={{ height: 230, width: "100%" }}
          resizeMode="contain"
          source={require("./asset/slogon_nike.png")}
        />
      </View>
      <Text style={styles.title}>SIGN UP</Text>

      <View
        style={{
          width: "100%",
          paddingHorizontal: 30,
        }}
      >
        <View>
          <TextInput
            style={[styles.TextInput]}
            value={name}
            onChangeText={setName}
            placeholder="User Name"
          />
          <FontAwesome5
            style={styles.icon}
            name="user-alt"
            size={25}
            color="black"
          />
        </View>
        {hasErrorUserName() || (
          <HelperText style={styles.textError} type="error">
            Error: User name phải có ít nhất 6 ký tự số và chữ!!!
          </HelperText>
        )}
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
        <View>
          <TextInput
            style={[styles.TextInput]}
            placeholder="Re-enter password"
            value={rePassword}
            onChangeText={setRePassword}
            secureTextEntry
          />
          <Entypo
            name="lock-open"
            style={styles.icon}
            size={25}
            color="black"
          />
        </View>
        {hasErrorRePassword() || (
          <HelperText style={styles.textError} type="error">
            Error:Không khớp với mật khẩu!!!
          </HelperText>
        )}
        <TouchableOpacity
          style={styles.Button}
          onPress={() => {
            signup(email, password);
          }}
        >
          {isLoading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
              Create
            </Text>
          )}
        </TouchableOpacity>
        <Text style={{ textAlign: "center" }}>
          Already have an account?
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("signin");
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
            marginTop: 15,
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
        isVisible={visibleSuccess}
        onBackdropPress={() => {
          setVisibleSuccess(!visibleSuccess);
        }}
      >
        <Dialog.Title
          titleStyle={{ color: "green", textAlign: "center" }}
          title="Tạo Tài Khoản Thành Công"
        />
        <Text>Vui lòng truy cập vào email để xác thực tài khoản.</Text>
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
          title="Tạo Tài Khoản Thất Bại"
        />
        <Text>
          Email đã được đăng kí tài khoản trước đó hoặc không phải là email.
        </Text>
      </Dialog>
    </View>
  );
}
