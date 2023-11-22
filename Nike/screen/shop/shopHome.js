import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Shop from './shop'
import SneakerWeek from './sneakerWeek'
import BestSeller from './bestSeller'
import Discount from './discount'
import ShopAll from './shopAll'

const Stack = createNativeStackNavigator()
const shopHome = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Shop" component={Shop} options={{ headerShown: false }} />
                <Stack.Screen name="Sneakers of the Week" component={SneakerWeek}
                    options={{}}
                />
                <Stack.Screen name="Best Sellers" component={BestSeller} />
                <Stack.Screen name="Discount" component={Discount} />
                <Stack.Screen name="Shop All" component={ShopAll} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default shopHome