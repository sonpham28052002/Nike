import React from 'react';
import { View, Text, Image, Dimensions, FlatList, TouchableOpacity, ScrollView, Animated } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { searchProduct } from '../../service/ProductService'
import currency from "currency.js";
import { getImage } from '../../function/getImage'
import { styles } from './style';
import { ListItem } from '@rneui/themed';
export default function order() {
  var [items, setItems] = React.useState([])
  var [total, setTotal] = React.useState(10000)
  React.useEffect(() => {
    searchProduct((data) => setItems(data), '', 10)
  }, [])
  var totalPrice = currency(total, {
    symbol: "đ",
    separator: ",",
    precision: 0,
  }).format();
  const height = Dimensions.get('window').height;
  const animated = React.useRef(new Animated.Value(height * 0.11)).current;
  const [expanded, setExpanded] = React.useState(false);
  return (
    <View style={{ flex: 1, height: height, justifyContent: "center", alignItems: "center" }}>
      <Animated.View style={{
        height: animated,
        width: '100%',
        padding: 10,
        backgroundColor: 'lightgray',
        borderBottomWidth: 1
      }}>
        <ListItem.Accordion
          containerStyle={{ backgroundColor: 'lightgray' }}
          content={
            <ListItem.Content
            >
              <ListItem.Title style={styles.text}>Nguyen Thanh Son</ListItem.Title>
            </ListItem.Content>
          }
          isExpanded={expanded}
          onPress={() => {
            if (!expanded){
              Animated.timing(animated, { toValue: height * 0.2, duration: 500 }).start()
              setTimeout(() => {
                setExpanded(!expanded);
              }, 500);
            }
            else{
            Animated.timing(animated, { toValue: height * 0.11, duration: 500 }).start()
            setExpanded(!expanded);
            }
          }}
        >
          <ListItem
            containerStyle={{ backgroundColor: 'lightgray', marginTop: -10, paddingTop: -10 }}
          >
            <ListItem.Content>
              <Text style={styles.text}>Phone: 0387843358</Text>
              <Text style={styles.text} numberOfLines={1}>Adress: 117 DHT 17, PDHT, Q12, TP HCM</Text>
            </ListItem.Content>
          </ListItem>
        </ListItem.Accordion>
      </Animated.View>
      <ScrollView style={{ width: '100%', height: '60%' }}>
        <FlatList data={items}
          style={{ width: '100%' }}
          renderItem={({ item }) => {
            var price = currency(item.price, {
              symbol: "đ",
              separator: ",",
              precision: 0,
            }).format();
            return (
              <View style={styles.viewContain}>
                <Image style={styles.img} resizeMode='contain' source={getImage(item.id, item.productImages[0].path)} ></Image>
                <View style={styles.viewTitle}>
                  <Text style={styles.text}>{item.name}</Text>
                  <Text numberOfLines={1} style={styles.textDescription}>{item.description}</Text>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={styles.textPriceOld}>{price}</Text>
                    <Text style={styles.textPriceNew}>{price}</Text>
                  </View>
                </View>
                <View style={styles.viewButton}>
                  <TouchableOpacity>
                    <AntDesign name="minuscircle" size={24} color="black" />
                  </TouchableOpacity>
                  <Text style={styles.textQuantity}>10</Text>
                  <TouchableOpacity>
                    <AntDesign name="pluscircle" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
            )
          }}
        />
      </ScrollView>
      <View style={styles.viewCheckOut}>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
          <Text style={styles.textTotal}>Total: </Text>
          <Text style={styles.textTotalPrice}>{totalPrice}</Text>
        </View>
        <TouchableOpacity style={styles.buttonCheckOut}>
          <Text style={styles.textCheckOut}>Check Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}