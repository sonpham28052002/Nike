import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from "@expo/vector-icons";
import { setOptionDrawer } from './function';
import { getAllProduct } from '../../service/ProductService';
import { FlatList } from 'react-native';
import { calcStar } from '../../function/calculator';

const sneakerWeek = ({ navigation, route }) => {
  var [items, setItems] = React.useState([])
  React.useEffect(() => {
    setOptionDrawer(navigation, route.params)
    getAllProduct((data) => {
      setItems(data)
    })
  }, [])
  return (
    <View>
      <FlatList data={items} renderItem={({ item }) => {
        let star = calcStar(item.feedbacks)
        // get product have average rating >= 4
         return star >=4? <View><Text>{star}</Text></View>: null
      }} />
    </View>
  )
}

export default sneakerWeek