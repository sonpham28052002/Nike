import { View, Text, TouchableOpacity, TextInput, Dimensions, Image, Animated } from 'react-native'
import { Avatar } from '@rneui/themed';
import styles from './style'
import { FontAwesome5, FontAwesome, MaterialIcons, AntDesign, Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRef, useState } from 'react';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { Modal, Portal, Button, PaperProvider } from 'react-native-paper';
import { putAPI } from '../../redux-toolkit/slices';
import Address from '../address/address';
import { useDispatch, useSelector } from 'react-redux';
export default function user({ navigation }) {
  const user = useSelector(state => state.data)
  const { width, height } = Dimensions.get("window")
  const items = [require('../discover/asset/gift.png'), require('../discover/asset/running.jpg'), require('../discover/asset/running2.jpg'), require('../discover/asset/speed.jpg')]
  const animate = useRef(new Animated.Value(height * 0.6)).current
  const [expanded, setExpanded] = useState(false);
  const [textButton, setTextButton] = useState('Edit Profile')
  const [textPhone, setTextPhone] = useState(user.phone)
  // const [textEmail, setTextEmail] = useState(user.email)
  const [textAddress, setTextAddress] = useState(user.address)
  const [visible, setVisible] = useState(false);
  var dispatch = useDispatch()
  return (
    <PaperProvider>
      <Portal>
        <Modal visible={visible} onDismiss={() => setVisible(false)} contentContainerStyle={{ backgroundColor: 'white', padding: 20 }}>
          <Address callBack={(address) => {
            setTextAddress(address)
            setVisible(false)
          }} />
        </Modal>
      </Portal>
      <LinearGradient style={{ flex: 1 }}
        colors={['#75f9e3', '#d8fff9']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Animated.View style={{ justifyContent: "space-between", alignItems: "center", width: width, height: animate }}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 50 }}>
              <Avatar
                size={100}
                rounded
                source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
              />
              <Text style={styles.textTitle}>{user.name}</Text>
            </View>
            {
              expanded ?
                <View style={{ width: width * 0.8 }}>
                  <View style={styles.viewInfo}>
                    <View style={styles.viewIcon}>
                      <FontAwesome name="phone" size={30} color="black" />
                    </View>
                    <View style={styles.viewTextInfo}>
                      <TextInput style={styles.textSubTitle} value={textPhone} onChangeText={setTextPhone} />
                    </View>
                  </View>
                  <View style={styles.viewInfo}>
                    <View style={styles.viewIcon}>
                      <MaterialIcons name="email" size={24} color="black" />
                    </View>
                    <View style={styles.viewTextInfo}>
                      <Text style={styles.textSubTitle}>{user.email}</Text>
                    </View>
                  </View>
                  <View style={styles.viewInfo}>
                    <View style={styles.viewIcon}>
                      <FontAwesome5 name="address-card" size={24} color="black" />
                    </View>
                    <View style={[styles.viewTextInfo, { flexDirection: 'row' }]}>
                      <View style={{ width: '80%' }}>
                        <Text style={styles.textSubTitle} numberOfLines={2}>{textAddress}</Text>
                      </View>
                      <TouchableOpacity style={{ width: '20%', paddingTop: 15 }}
                        onPress={() => setVisible(true)}
                      >
                        <FontAwesome name="edit" size={40} color="red" />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={{ width: '100%', paddingTop: 20 }}>
                    <TouchableOpacity style={styles.buttonUpdate}
                      onPress={() => {
                        let newUser = { ...user }
                        newUser.phone = textPhone
                        newUser.address = textAddress
                        dispatch(putAPI(newUser))
                        Animated.timing(animate, { toValue: height * 0.6, duration: 500 }).start()
                        setTextButton('Edit Profile')
                        setExpanded(!expanded);
                      }}
                    >
                      <Text style={styles.textSubTitle}>Update</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                : null
            }
          </View>
          <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity style={styles.button}
              onPress={() => {
                if (!expanded) {
                  Animated.timing(animate, { toValue: height, duration: 500 }).start()
                  setTextButton('Cancel')
                  setTimeout(() => {
                    setExpanded(!expanded);
                  }, 500);
                }
                else {
                  Animated.timing(animate, { toValue: height * 0.6, duration: 500 }).start()
                  setTextButton('Edit Profile')
                  setExpanded(!expanded);
                }
              }}>
              <Text style={styles.textSubTitle}
              >{textButton}</Text>
            </TouchableOpacity>
            <View style={styles.viewButton}>
              <TouchableOpacity style={styles.buttonNavigate}>
                <FontAwesome5 name="gift" size={30} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonNavigate}>
                <FontAwesome5 name="gift" size={30} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonNavigate}>
                <AntDesign
                  name="heart"
                  size={30}
                  color={"black"}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonNavigate}>
                <Feather name="shopping-bag" size={30} color="black" />
              </TouchableOpacity>
            </View>
          </View>

        </Animated.View>
        <View style={{ width: width, height: height * 0.4, marginTop: 5 }}
          onPress={() => navigation.navigate('Shop')}
        >
          <SwiperFlatList
            style={{ width: width, height: '100%' }}
            autoplay
            autoplayDelay={2}
            autoplayLoop
            index={0}
            data={items}
            horizontal
            showPagination
            renderItem={({ item }) => {
              return (
                <Image resizeMode='cover' style={{ width: width, 'height': height * 0.4 }} source={item} />
              )
            }} />
        </View>
      </LinearGradient>
    </PaperProvider>
  );
}