import { View, FlatList } from 'react-native'
import React from 'react'
import { setOptionDrawer } from './function';
import { user } from '../Favorites/product'
import Card from '../cardProduct/card'
import { searchProduct } from '../../service/ProductService'
const menShoes = ({ navigation, route }) => {
    var [items, setItems] = React.useState([])
    React.useEffect(() => {
        setOptionDrawer(navigation, route.params)
        searchProduct((data) => {
            setItems(data)
        }, 'Men', '')
    }, [])
    return (
        <View>
            <FlatList data={items} numColumns={2} renderItem={({ item }) => {
                // get product have tag is Custom
                return <Card value={item} user={user} />
            }} />
        </View>
    )
}

export default menShoes