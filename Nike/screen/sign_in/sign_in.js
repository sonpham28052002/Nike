import React from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { styles } from "./style";
import { HelperText } from "react-native-paper";
import { CheckBox } from "@rneui/themed";
export default function sign_in() {
  var [email, setEmail] = React.useState("");
  var [password, setPassword] = React.useState("");

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
          // height: 200,
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
        <HelperText type="info">sdasđá</HelperText>

        <TextInput
          style={[styles.TextInput]}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <CheckBox checked title="Label" />
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
