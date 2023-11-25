import { View, Text, TouchableOpacity, Dimensions, Animated } from 'react-native'
import { Avatar } from '@rneui/themed';
import styles from './style'
import { FontAwesome5, EvilIcons, Foundation, AntDesign, Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { searchProduct } from '../../service/ProductService';
import { useEffect, useRef, useState } from 'react';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
export default function user({ navigation }) {
  const [items, setItems] = useState([])
  const [color, setColor] = useState('yellow')
  useEffect(() => {
    searchProduct((data) => setItems(data), 'New', 10)
  }, [])
  const height = Dimensions.get("window").height
  // var animate = useRef(new Animated.Value(0)).current
  useEffect(() => {
    const inteval = setInterval(() => {
      setColor(color == 'red' ? 'yellow' : color == 'yellow' ? 'blue' : 'red')
    }, 1000)
    return () => clearInterval(inteval)
  }, [color])
  return (
    <LinearGradient style={{ flex: 1, height: height }}
      colors={['#75f9e3', '#d8fff9']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={{ justifyContent: "center", alignItems: "center", width: '100%', height: '60%' }}>
        <Avatar
          size={100}
          rounded
          source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
        />
        <Text style={styles.textTitle}>Nguyễn Thanh Sơn</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textSubTitle}>Edit Profile</Text>
        </TouchableOpacity>
        <View style={styles.viewButton}>
          <TouchableOpacity style={styles.buttonNavigate}>
            <FontAwesome5 name="gift" size={30} color="black" />
            {/* <Text style={styles.textSubTitle}>Orderd</Text> */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonNavigate}>
            <FontAwesome5 name="gift" size={30} color="black" />
            {/* <Text style={styles.textSubTitle}>Orderd</Text> */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonNavigate}>
            <AntDesign
              name="heart"
              size={30}
              color={"black"}
            />
            {/* <Text style={styles.textSubTitle}>Favorites</Text> */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonNavigate}>
            <Feather name="shopping-bag" size={30} color="black" />
            {/* <Text style={styles.textSubTitle}>Cart</Text> */}
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ width: '100%', height: '40%', paddingHorizontal: 10 }}>
        <View style={{ width: '100%', height: '50%', flexDirection: 'row' }}>
          <View style={{ width: '90%', height: '100%' }}>
            <Foundation name="burst-new" size={height * 0.4 * 0.5 * 0.3} color={color} />
            <SwiperFlatList
              autoplay
              autoplayDelay={1}
              autoplayLoop
              index={1}
              data={items}
              horizontal
              renderItem={({ item }) => {
                return (
                  <View style={{ width: 100, height: height * 0.4 * 0.5 * 0.68, borderWidth: 1 }}>
                    <Text>{item.name}</Text>
                  </View>
                )
              }} />
          </View>
          <TouchableOpacity style={{ width: '10%', height: '67%', alignSelf: 'flex-end', justifyContent: 'center', alignItems: 'center' }}>
            <EvilIcons name="arrow-right" size={40} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{ width: '100%', height: '50%', flexDirection: 'row' }}>
          <View style={{ width: '90%', height: '100%' }}>
            <Foundation name="burst-sale" size={height * 0.4 * 0.5 * 0.3} color={color} />
            <SwiperFlatList
              autoplay
              autoplayDelay={1}
              autoplayLoop
              index={1}
              data={items}
              horizontal
              renderItem={({ item }) => {
                return (
                  <View style={{ width: 100, height: height * 0.4 * 0.5 * 0.68, borderWidth: 1 }}>
                    <Text>{item.name}</Text>
                  </View>
                )
              }} />
          </View>
          <TouchableOpacity style={{ width: '10%', height: '67%', alignSelf: 'flex-end', justifyContent: 'center', alignItems: 'center' }}>
            <EvilIcons name="arrow-right" size={40} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}