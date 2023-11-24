import { View, FlatList } from 'react-native'
import React from 'react'
import { setOptionDrawer } from './function';
import { getAllProduct } from '../../service/ProductService';
import Card from '../cardProduct/card'
import { useSelector } from 'react-redux';

export default function shopAll({navigation, route}) {
  var user = useSelector((state) => state.data);

  var [items, setItems] = React.useState([])
  React.useEffect(()=>{
    setOptionDrawer(navigation, route.params)
    getAllProduct((data) => {
      setItems(data)
    })
  },[])
  return (
    <View>
      <FlatList data={items} numColumns={2} renderItem={({ item }) => {
        // get all products
         return <Card value = {item} user= {user}/>
      }} />
    </View>
  )
}