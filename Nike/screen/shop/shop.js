import { View, Text, Image, TouchableOpacity } from 'react-native'
import { FlatList, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from './style'
import React from 'react';
import Card from '../cardProduct/card'
import { getProductBestSellers, searchProduct } from '../../service/ProductService';
import { useSelector } from 'react-redux';
export default function shop({ navigation, route }) {
  var user = useSelector((state)=> state.data)
  const dataWeekHighlight = [{
    name: 'Sneakers of the Week',
    img: require('./assets/sneakersOfTheWeek.png')
  },
  {
    name: 'Best Sellers',
    img: require('./assets/bestseller.jpg')
  },
  {
    name: 'Discount',
    img: require('./assets/discount.png')
  },
  {
    name: 'Shop All',
    img: require('./assets/shopAll.png')
  }]

  const dataGiftForYou = [{
    title: 'For Custom',
    tag: 'custom',
    img: require('./assets/custom.jpg')
  },
  {
    title: 'For Men',
    tag: 'men',
    img: require('./assets/menShoes.png')
  },
  {
    title: 'For Women',
    tag: 'women',
    img: require('./assets/womenShoes.png')
  },
  {
    title: 'For Younger - Kids',
    tag: 'younger',
    img: require('./assets/younger.jpg')
  }]

  const dataTopRoad = [{
    title: 'Air Force 1',
    img: require('./assets/airForce1.png')
  },
  {
    title: 'Dunk',
    img: require('./assets/dunk.jpg')
  },
  {
    title: 'Jordan',
    img: require('./assets/jordan.jpg')
  },
  {
    title: 'ACG',
    img: require('./assets/acg.png')
  }]
  const dataSearch = ['Dunk', 'Air Force 1', 'Air Max']
  var [showHot, setShowHot] = React.useState(false)
  var [showSale, setShowSale] = React.useState(false)
  var [dataBestSeller, setDataBestSellers] = React.useState([])
  var [dataJustIn, setDataJustIn] = React.useState([])
  React.useEffect(() => {
    getProductBestSellers((data) => {
      setDataBestSellers(data)
    }, 4)
    searchProduct((data) => {
      setDataJustIn(data)
    }, 'JustIn', 4)
  }, [])
  return (
    <View style={{ flex: 1 }}>
      <View style={[styles.item, { marginTop: 10 }]}>
        <Text style={styles.headerListItem}>This Week’s Highlights</Text>
        <ScrollView
          nestedScrollEnabled
        >
          <FlatList data={dataWeekHighlight}
            horizontal
            renderItem={({ item }) => {
              return (
                <TouchableOpacity style={{ marginRight: 10, width: 120 }}
                  onPress={() => {
                    route.params.setOptions({
                      headerShown: false
                    })
                    navigation.navigate(item.name, route.params)
                  }}
                >
                  <Image source={item.img} style={styles.imgSmall} />
                  <Text style={styles.textItem}>{item.name}</Text>
                </TouchableOpacity>
              )
            }}
          />
        </ScrollView>
      </View>

      <View style={styles.item}>
        <Text style={styles.headerListItem}>Gift That Move You</Text>
        <ScrollView
          nestedScrollEnabled
        >
          <FlatList data={dataGiftForYou}
            horizontal
            renderItem={({ item }) => {
              return (
                <TouchableOpacity style={{ marginRight: 10, width: 120 }}
                  onPress={() => {
                    route.params.setOptions({
                      headerShown: false
                    })
                    navigation.navigate('Gift For You', { navigation: route.params, title: item.title, tag: item.tag })
                  }}
                >
                  <Image source={item.img} style={styles.imgSmall} />
                  <Text style={styles.textItem}>{item.title}</Text>
                </TouchableOpacity>
              )
            }}
          />
        </ScrollView>
      </View>

      <View style={styles.itemList}>
        <View>
          <TouchableOpacity style={styles.buttonList}
            onPress={() => {
              setShowHot(!showHot)
              setShowSale(false)
            }}
          >
            <Text style={styles.headerListItem}>Hot</Text>
            <Image style={{width: 100, height: 100}} resizeMethod='contain' source={require('./assets/hot.png')} />
          </TouchableOpacity>
          {
            showHot ?
              <View style={styles.itemListChild}>
                <TouchableOpacity style={styles.buttonListChild}
                 onPress={() => {
                  route.params.setOptions({
                    headerShown: false
                  })
                  navigation.navigate("Show List Card", { navigation: route.params, back: "Shop", name: 'New' })
                }}
                >
                  <Text style={styles.textItem}>New</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonListChild}
                onPress={() => {
                  route.params.setOptions({
                    headerShown: false
                  })
                  navigation.navigate('Our BestSellers', {navigation: route.params, title: 'Top Pick'})
                }}
                >
                  <Text style={styles.textItem}>Top Pick</Text>
                </TouchableOpacity>
              </View>
              : null
          }
        </View>
        <View>
          <TouchableOpacity style={styles.buttonList}
            onPress={() => {
              setShowHot(false)
              setShowSale(!showSale)
            }}
          >
            <Text style={styles.headerListItem}>Sales</Text>
            <Image style={{ width: 120, height: 100 }} resizeMethod='contain' source={require('./assets/sale.png')} />
          </TouchableOpacity>
          {
            showSale ?
              <View style={styles.itemListChild}>
                <TouchableOpacity style={styles.buttonListChild}
                  onPress={() => {
                    route.params.setOptions({
                      headerShown: false
                    })
                    navigation.navigate('Discount', route.params)
                  }}
                >
                  <Text style={styles.textItem}>Sales Up To 70%</Text>
                </TouchableOpacity>
              </View>
              : null
          }
        </View>
      </View>
      <View style={styles.item}>
        <Text style={styles.headerListItem}>Our Bestsellers</Text>
        <FlatList data={dataBestSeller}
          numColumns={2}
          renderItem={({ item }) => {
            return <Card value={item} user={user} />
          }}
        />
        <View style={{
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <TouchableOpacity style={styles.buttonViewAll}
            onPress={() => {
              route.params.setOptions({
                headerShown: false
              })
              navigation.navigate('Our BestSellers', { navigation: route.params, title: "Our Best Seller" })
            }}
          >
            <Text style={styles.textItem}>View All</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.item}>
        <Text style={styles.headerListItem}>Explore Our Top Road</Text>
        <ScrollView
          nestedScrollEnabled
        >
          <FlatList data={dataTopRoad}
            horizontal
            renderItem={({ item }) => {
              return (
                <TouchableOpacity style={{ marginRight: 10 }}
                  onPress={() => {
                    route.params.setOptions({
                      headerShown: false
                    })
                    navigation.navigate("Show List Card", { navigation: route.params, back: "Shop", name: item.title })
                  }}
                >
                  <Image source={item.img} style={styles.imgSmall} />
                  <Text style={styles.textItem}>{item.title}</Text>
                </TouchableOpacity>
              )
            }}
          />
        </ScrollView>
      </View>

      <View style={styles.item}>
        <Text style={styles.headerListItem}>Just In</Text>
        <FlatList data={dataJustIn}
          numColumns={2}
          renderItem={({ item }) => {
            return <Card value={item} user={user} />
          }}
        />
        <View style={{
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <TouchableOpacity style={styles.buttonViewAll}
            onPress={() => {
              route.params.setOptions({
                headerShown: false
              })
              navigation.navigate('Just In', route.params)
            }}
          >
            <Text style={styles.textItem}>View All</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.item}>
        <Text style={styles.headerListItem}>Popular Searches</Text>
        <FlatList data={dataSearch}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={{ marginVertical: 10, flexDirection: 'row', alignItems: 'center' }}
                onPress={() => {
                  route.params.setOptions({
                    headerShown: false
                  })
                  navigation.navigate("Show List Card", { navigation: route.params, back: "Shop", name: item })
                }}
              >
                <FontAwesome style={{ marginRight: 10 }} name="search" size={24} color="black" />
                <Text style={styles.textItem}>{item}</Text>
              </TouchableOpacity>
            )
          }}
        />
      </View>

      <View style={[styles.item, { marginBottom: 10 }]}>
        <Text style={styles.headerListItem}>Shop By Brand</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity style={{ width: '33%', borderBottomWidth: 1, borderRightWidth: 1, justifyContent: 'center', alignItems: 'center' }}
          // onPress={() => {
          //   route.params.setOptions({
          //     headerShown: false
          //   })
          //   navigation.navigate('Brand', { navigation: route.params, title: item.title })
          // }}
          >
            <Image source={require('./assets/brand1.png')} resizeMode='contain' style={styles.imgBrand} />
          </TouchableOpacity>
          <TouchableOpacity style={{ width: '33%', borderLeftWidth: 1, borderBottomWidth: 1, borderRightWidth: 1, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => {
              route.params.setOptions({
                headerShown: false
              })
              navigation.navigate("Show List Card", { navigation: route.params, back: "Shop", name: 'NikeLab' })
              // navigation.navigate('Brand', { navigation: route.params, title: 'NikeLab' })
            }}
          >
            <Image source={require('./assets/brand2.png')} resizeMode='contain' style={styles.imgBrand} />
          </TouchableOpacity>
          <TouchableOpacity style={{ width: '33%', borderLeftWidth: 1, borderBottomWidth: 1, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => {
              route.params.setOptions({
                headerShown: false
              })
              navigation.navigate("Show List Card", { navigation: route.params, back: "Shop", name: 'Jordan' })

            }}
          >
            <Image source={require('./assets/brand3.png')} resizeMode='contain' style={styles.imgBrand} />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity style={{ width: '33%', borderRightWidth: 1, borderTopWidth: 1, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => {
              route.params.setOptions({
                headerShown: false
              })
              navigation.navigate("Show List Card", { navigation: route.params, back: "Shop", name: 'Nike Sportswear' })
            }}
          >
            <Image source={require('./assets/brand4.png')} resizeMode='contain' style={styles.imgBrand} />
          </TouchableOpacity>
          <TouchableOpacity style={{ width: '33%', borderTopWidth: 1, borderRightWidth: 1, borderLeftWidth: 1, justifyContent: 'center', alignItems: 'center' }}

          >
            <Image source={require('./assets/brand5.png')} resizeMode='contain' style={styles.imgBrand} />
          </TouchableOpacity>
          <TouchableOpacity style={{ width: '33%', borderLeftWidth: 1, borderTopWidth: 1, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => {
              route.params.setOptions({
                headerShown: false
              })
              navigation.navigate("Show List Card", { navigation: route.params, back: "Shop", name: 'Nike By You' })
            }}
          >
            <Image source={require('./assets/brand6.jpg')} resizeMode='contain' style={styles.imgBrand} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}