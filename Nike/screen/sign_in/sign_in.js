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
import {} from "@rneui/themed";
import { FIREBASE_AUTH } from "../../config_Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
export default function sign_in() {
  const auth = FIREBASE_AUTH;
  var [email, setEmail] = React.useState("sonpham28052002@gmail.com");
  var [password, setPassword] = React.useState("sonpham1234");
  var [checked, setCheck] = React.useState(false);
  var [isLoading, setLoading] = React.useState(false);

  var login = async (email, password) => {
    setLoading(true);
    if (hasErrorEmail() && hasErrorPassword()) {
      try {
        const response = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log("dákdjna");
        console.log(response.user);
        console.log(email);
        console.log(password);
      } catch (error) {
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
          <TouchableOpacity>
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
          <TouchableOpacity>
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
    </View>
  );
}
