import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import { Avatar } from '@rneui/themed';
import styles from './style'
import { FontAwesome5, FontAwesome, MaterialCommunityIcons, AntDesign, Feather } from '@expo/vector-icons';
export default function user({ navigation }) {
  return (
    <View style={{ flex: 1, height: Dimensions.get("window").height }}>
      {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%' }}> */}
      <View style={{ justifyContent: "center", alignItems: "center", width: '100%', height: '85%' }}>
      <View style={{ justifyContent: "flex-end", alignItems: "center", width: '100%', height: '40%' }}>
        <Avatar
          size={100}
          rounded
          source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
        />
        <Text style={styles.textTitle}>Nguyễn Thanh Sơn</Text>
        </View>
        <View style={{ width: '100%', paddingHorizontal: 20, height: '40%' }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.viewIcon}>
              <FontAwesome name="phone" size={35} color="black" />
            </View>
            <Text style={styles.textSubTitle}>0956674321</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.viewIcon}>
              <MaterialCommunityIcons name="email" size={35} color="black" />
            </View>
            <Text style={styles.textSubTitle}>son@gmail.com</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.viewIcon}>
              <FontAwesome5 name="address-card" size={35} color="black" />
            </View>
            <Text style={styles.textSubTitle}>117 DHT 17, PDHT, Q12, TPHCM</Text>
          </View>
        </View>
        <View style={{width: '100%', height: '20%', paddingVertical: 10, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textSubTitle}>Edit Profile</Text>
        </TouchableOpacity>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20}}>
        <TouchableOpacity>
          <FontAwesome5 name="gift" size={24} color="black" />
          <Text style={styles.textSubTitle}>Orderd</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome5 name="gift" size={24} color="black" />
          <Text style={styles.textSubTitle}>Orderd</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <AntDesign
            name="heart"
            size={24}
            color={"black"}
          />
          <Text style={styles.textSubTitle}>Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Feather name="shopping-bag" size={24} color="black" />
          <Text style={styles.textSubTitle}>Cart</Text>
        </TouchableOpacity>
      </View>
      {/* </View>
      <View style={{ flex: 1 }}>
        <Text>Content</Text>
      </View> */}
    </View>
  );
}