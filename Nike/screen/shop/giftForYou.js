import { View, FlatList } from 'react-native'
import React from 'react'
import { setOptionDrawer } from './function';
import Card from '../cardProduct/card'
import { searchProduct } from '../../service/ProductService'
import { useSelector } from 'react-redux';
const menShoes = ({ navigation, route }) => {
    var user = useSelector((state) => state.data);

    var [items, setItems] = React.useState([])
    React.useEffect(() => {
        setOptionDrawer(navigation, route.params.navigation)
        navigation.setOptions({
            headerTitle: route.params.title,
        })
        searchProduct((data) => {
            setItems(data)
        }, route.params.tag, '')
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