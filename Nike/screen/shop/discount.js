import { View, Text } from 'react-native'
import React from 'react'
import { setOptionDrawer } from './function';

const discount = ({navigation, route}) => {
  React.useEffect(()=>{
    setOptionDrawer(navigation, route.params)
  },[])
  return (
    <View>
      <Text>discount</Text>
    </View>
  )
}

export default discount