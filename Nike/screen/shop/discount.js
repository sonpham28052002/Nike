import { View, FlatList } from 'react-native'
import React from 'react'
import { setOptionDrawer } from './function';
import { getProductDiscount } from '../../service/ProductService';
import Card from '../cardProduct/card'
import { useSelector } from 'react-redux';

const discount = ({navigation, route}) => {
  var user = useSelector((state)=> state.data)
  var [items, setItems] = React.useState([])
  React.useEffect(()=>{
    setOptionDrawer(navigation, route.params, "Discount", "Shop")
    getProductDiscount((data)=>{
      setItems(data)
    })
  },[])
  return (
    <View>
      <FlatList data={items} numColumns={2} renderItem={({ item }) => {
        // get product have discount > 0 order by discount desc
         return <Card value = {item} user= {user}/>
      }} />
    </View>
  )
}

export default discount