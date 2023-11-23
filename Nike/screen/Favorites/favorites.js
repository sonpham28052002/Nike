import {View,Text} from 'react-native'
import Cart from '../cardProduct/card'
import {product,user} from './product'
export default function favorites() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Cart value = {product} user= {user}/>
      </View>
    );
  }