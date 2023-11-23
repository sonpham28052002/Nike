import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { setOptionDrawer } from './function';
import { getProductBestSellers } from '../../service/ProductService';
import {user} from '../Favorites/product'
import Card from '../cardProduct/card'

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
      <FlatList data={items} numColumns={2} renderItem={({ item }) => {
        // get 20 product with the highest purchase quantity in 7 days
         return <Card value = {item} user= {user}/>
      }} />
    </View>
  )
}

export default bestSeller