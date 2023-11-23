import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { setOptionDrawer } from './function';
import { getProductBestSellers } from '../../service/ProductService';

const bestSeller = ({navigation, route}) => {
  var [items, setItems] = React.useState([])
  React.useEffect(()=>{
    setOptionDrawer(navigation, route.params)
    getProductBestSellers((data) => {
      setItems(data)
    })
  },[])
  return (
    <View>
      <FlatList data={items} renderItem={({ item }) => {
        // get 20 product with the highest purchase quantity
         return <View><Text>{item.name}</Text></View>
      }} />
    </View>
  )
}

export default bestSeller