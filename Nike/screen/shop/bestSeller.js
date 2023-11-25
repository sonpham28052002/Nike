import { View, FlatList } from 'react-native'
import React from 'react'
import { setOptionDrawer } from './function';
import { getProductBestSellersOfWeek } from '../../service/ProductService';
import Card from '../cardProduct/card'
import { useSelector } from 'react-redux';

const bestSeller = ({navigation, route}) => {
  var user = useSelector((state)=> state.data)
  var [items, setItems] = React.useState([])
  React.useEffect(()=>{
    setOptionDrawer(navigation, route.params, "Best Sellers", "Shop")
    getProductBestSellersOfWeek((data) => {
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