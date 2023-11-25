import { View, FlatList } from 'react-native'
import React from 'react'
import { setOptionDrawer } from './function';
import { getProductBestSellers } from '../../service/ProductService';
import Card from '../cardProduct/card'
import { useSelector } from 'react-redux';
const ourBestSellers = ({ navigation, route }) => {
  var user = useSelector((state)=> state.data)
  var [items, setItems] = React.useState([])
  React.useEffect(() => {
    setOptionDrawer(navigation, route.params)
    getProductBestSellers((data) => {
      setItems(data)
    }, -1)
  }, [])
  return (
    <View>
      <FlatList data={items} numColumns={2} renderItem={({ item }) => {
        // get product with the highest purchase quantity
         return <Card value = {item} user= {user}/>
      }} />
    </View>
  )
}

export default ourBestSellers