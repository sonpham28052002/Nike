import { View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from "@expo/vector-icons";
import Card from '../cardProduct/card'
import { setOptionDrawer } from './function';
import { searchProduct } from '../../service/ProductService';
import { useSelector } from 'react-redux';

const showListCard = ({ navigation, route }) => {
    var [items, setItems] = React.useState([])
    var user = useSelector((state)=> state.data)
    React.useEffect(() => {
        setOptionDrawer(navigation, route.params.navigation, route.params.name, route.params.back)
        searchProduct((data) => {
            setItems(data)
        }, route.params.name, '')
    }, [])
    return (
        <View>
            <FlatList data={items} numColumns={2} renderItem={({ item }) => {
                // get product with name
                return <Card value={item} user={user} />
            }} />
        </View>
    )
}

export default showListCard