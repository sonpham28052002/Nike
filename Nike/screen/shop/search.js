import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, FlatList, TouchableOpacity } from 'react-native';
import { setOptionDrawer } from './function';
import { getAllProduct } from '../../service/ProductService';
import styles from './style';
import { searchAndSort } from './function';
const search = ({ navigation, route }) => {
    var [items, setItems] = useState([])
    const [dataSearch, setDataSearch] = useState({})
    const [text, setText] = useState('');
    useEffect(() => {
        navigation.setOptions({
            headerRight: null
        })
        setOptionDrawer(navigation, route.params, () => {
            return (
                <View style={{ width: '100%' }}>
                    <TextInput style={styles.input}
                        onChangeText={setText}
                        placeholder='Search Products'
                        placeholderTextColor={'gray'}
                    />
                </View>
            )
        }, "Shop")
        getAllProduct((data) => {
            setItems(data)
        })
    }, [])
    useEffect(() => {
        const timerId = setTimeout(() => {
            if (text.trim() != '')
                if (searchAndSort(text, items).resultFounds) {
                    setDataSearch(searchAndSort(text, items))
                }
        }, 1000);
        return () => clearTimeout(timerId);
    }, [text]);
    return (
        <View>
            <FlatList data={dataSearch.resultFounds}
                renderItem={({ item }) => {
                    return <TouchableOpacity style={{ marginVertical: 10, justifyContent: 'center', paddingHorizontal: 10 }}
                        onPress={() => {
                            navigation.navigate("Show List Card", { navigation: route.params, back: "Search", name: item })
                        }}
                    >
                        <Text style={styles.textItem}>{item}</Text>
                    </TouchableOpacity>
                }}
            />
        </View>
    )
}

export default search