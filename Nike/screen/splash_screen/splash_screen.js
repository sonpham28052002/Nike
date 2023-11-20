import React, { useRef, useEffect } from "react";
import {
  View,
  Image,
  SafeAreaView,
  StatusBar,
  Animated,
  Easing,
  ActivityIndicator,
} from "react-native";
import { getAllProduct,getProductByID } from "../../service/ProductService";
export default function Splash({ navigation }) {
  // var [product,setProduct] = React.useState(undefined)
  
  // React.useEffect(()=>{
  //   getProductByID((apiData) => {
  //    console.log(apiData);},1)
    
  // },[])
  
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Home");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
      easing: Easing.elastic(4),
    }).start();
  };

  const size = fadeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 550],
  });

  useEffect(fadeIn, [fadeAnim]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar animated={true} hidden={true} backgroundColor="#61dafb" />
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Animated.Image
          style={{
            height: size,
            width: size,
            resizeMode: "contain",
            opacity: fadeAnim,
          }}
          source={require("./assets/slogon_nike.jpg")}
        />
        <Animated.Image
          style={{
            height: 100,
            width: 120,
            resizeMode: "contain",
            marginTop: -40,
            opacity: fadeAnim,
          }}
          source={require("../../assets/favicon.png")}
        />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 20,
          backgroundColor: "white",
        }}
      >
        <ActivityIndicator size="small" color="#000" />
      </View>
    </SafeAreaView>
  );
}
