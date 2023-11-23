import { View, FlatList } from 'react-native'
import React from 'react'
import { setOptionDrawer } from './function';
import { searchProduct } from '../../service/ProductService';
import Card from '../cardProduct/card'
import { user } from '../Favorites/product'
const topRoad = ({ navigation, route }) => {
  var [items, setItems] = React.useState([])
  React.useEffect(() => {
    setOptionDrawer(navigation, route.params.navigation)
    searchProduct((data) => {
      setItems(data)
    }, 'JustIn', '')
  }, [])
  return (
    <View>
      <FlatList data={items} numColumns={2} renderItem={({ item }) => {
        // get product with just in
         return <Card value = {item} user= {user}/>
      }} />
    </View>
  )
}

export default topRoad