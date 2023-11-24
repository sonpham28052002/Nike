import { View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from "@expo/vector-icons";
import {user} from '../Favorites/product'
import Card from '../cardProduct/card'
import { searchProduct } from '../../service/ProductService';

const showListCard = ({navigation, route}) => {
  var [items, setItems] = React.useState([])
  React.useEffect(()=>{
    navigation.setOptions({
        headerTitle: route.params.name,
        headerLeft: () => (
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("Search", route.params.navigation);
                }}
            >
                <AntDesign
                    style={{ marginLeft: 20 }}
                    name="arrowleft"
                    size={24}
                    color="black"
                />
            </TouchableOpacity>
        )
    })
    searchProduct((data) => {
      setItems(data)
    }, route.params.name, '')
  },[])
  return (
    <View>
      <FlatList data={items} numColumns={2} renderItem={({ item }) => {
        // get product with name
         return <Card value = {item} user= {user}/>
      }} />
    </View>
  )
}

export default showListCard