import { View, FlatList } from 'react-native'
import React from 'react'
import { setOptionDrawer } from './function';
import { searchProduct } from '../../service/ProductService';
import Card from '../cardProduct/card'
import { useSelector } from 'react-redux';
const topRoad = ({ navigation, route }) => {
  var [items, setItems] = React.useState([])
  var user = useSelector  ((state) => state.data);

  React.useEffect(() => {
    setOptionDrawer(navigation, route.params.navigation)
    navigation.setOptions({
        headerTitle: route.params.title,
    })
    searchProduct((data) => {
      setItems(data)
    }, route.params.title, '')
  }, [])
  return (
    <View>
      <FlatList data={items} numColumns={2} renderItem={({ item }) => {
        // get product in top road
         return <Card value = {item} user= {user}/>
      }} />
    </View>
  )
}

export default topRoad