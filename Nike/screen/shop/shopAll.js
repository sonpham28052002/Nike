import { Text, View } from 'react-native'
import React from 'react'
import { setOptionDrawer } from './function';

export default function shopAll({navigation, route}) {
  React.useEffect(()=>{
    setOptionDrawer(navigation, route.params)
  },[])
  return (
    <View>
      <Text>shopAll</Text>
    </View>
  )
}