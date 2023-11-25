import { View } from 'react-native'
import React from 'react'
import { setOptionDrawer } from './function';
import { getAllProduct } from '../../service/ProductService';
import { calcStar } from '../../function/calculator';
import Card from '../cardProduct/card'
import { user } from '../Favorites/product'
const sneakerWeek = ({ navigation, route }) => {
  var [items, setItems] = React.useState([])
  React.useEffect(() => {
    setOptionDrawer(navigation, route.params, "Sneakers of the Week", "Shop")
    getAllProduct((data) => {
      setItems(data)
    })
  }, [])
  return (
    <View style={{flexDirection: 'row', flexWrap:'wrap', justifyContent:'flex-start'}}>
      {
        items.map((item) => {
          if (calcStar(item.feedbacks) >= 4)
            return <Card value={item} user={user} />
        })
      }
    </View>
  )
}

export default sneakerWeek