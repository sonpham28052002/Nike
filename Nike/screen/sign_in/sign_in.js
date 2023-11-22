import React from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { styles } from "./style";
import { HelperText } from "react-native-paper";
import { CheckBox } from "@rneui/themed";
export default function sign_in() {
  var [email, setEmail] = React.useState(undefined);
  var [password, setPassword] = React.useState(undefined);
  var [checked, setCheck] = React.useState(false);

  const hasErrorEmail = () => {
    return email == undefined || email.includes("@");
  };
  const hasErrorPassword = () => {
    return password == undefined || password.includes("@");
  };
  return (
    <View style={styles.container}>
      <Image
        style={{ height: 300, width: "100%" }}
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
          marginTop: 20,
          width: "100%",
          paddingHorizontal: 30,
        }}
      >
        <Text style={styles.title}>LOGIN</Text>
        <TextInput
          style={[styles.TextInput]}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
        />
        {hasErrorEmail() || (
          <HelperText
            style={{ marginTop: -10, fontWeight: "bold" }}
            type="error"
          >
            Error: Phải là email!!!
          </HelperText>
        )}

        <TextInput
          style={[styles.TextInput]}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {hasErrorPassword() || (
          <HelperText
            style={{ marginTop: -10, fontWeight: "bold" }}
            type="error"
          >
            Error: mật khẩu phải có ít nhất 6 ký tự và có cả số và chữ!!!
          </HelperText>
        )}
        <View style={{marginTop:-10, backgroundColor:"red", flexDirection:"row"}}>
        <CheckBox
           checked={checked}
           onPress={()=> setCheck(!checked)}
           iconType="material-community"
           checkedIcon="checkbox-outline"
           uncheckedIcon={'checkbox-blank-outline'}
         />
        </View>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => {
            console.log(password);
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
