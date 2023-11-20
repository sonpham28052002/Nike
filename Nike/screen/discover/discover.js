import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import { styles } from "./style";
export default function discover() {
  var arr = [
    {
      id: 1,
      title: "NIKE PEGASUS TRAIL GORE-TEX",
      image: [require("./asset/running.jpg"), require("./asset/running2.jpg")],
      desc: "A waterproof GORE-TEX upper helps your feet stay dry whether you’re jogging down a rainy road or splashing through muddy trails. A flexible cuff around the ankle provides comfort and helps keep debris out.",
      onPress: () => {
        console.log("son");
      },
    },
    {
      id: 2,
      title: "NIKE PEGASUS TRAIL GORE-TEX",
      image: [require("./asset/speed.jpg")],
      desc: "Make it real with the Mercurial Dream Speed 7.",
      onPress: () => {
        console.log("son2");
      },
    },
    {
      id: 3,
      title: "SPEED BEYOND YOUR WILDEST DREAMS",
      image: [require("./asset/gift.png")],
      desc: "This year’s gift. Next year’s greatness.",
      onPress: () => {
        console.log("son3");
      },
    },
    {
      id: 4,
      title: "NIKE PEGASUS TRAIL GORE-TEX",
      image: [require("./asset/running.jpg"), require("./asset/running2.jpg")],
      desc: "",
      onPress: () => {
        console.log("son4");
      },
    },
  ];

  return (
    <ScrollView style={{ flex: 1 }}>
      <FlatList
        data={arr}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View>
              <SwiperFlatList
                autoplay
                autoplayDelay={2}
                autoplayLoop
                data={item.image}
                renderItem={({ item }) => (
                  <ImageBackground style={styles.image} resizeMode="cover" source={item} />
                )}
              />
              <View style={styles.viewInfo}>
                <Text style={styles.textTilte}>{item.title}</Text>
                <Text
                  style={{ color: "white", fontSize: 10 }}
                  numberOfLines={1}
                >
                  {item.desc}
                </Text>
                <TouchableOpacity style={styles.button} onPress={item.onPress}>
                  <Text style={styles.textButton}>Shop</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </ScrollView>
  );
}
