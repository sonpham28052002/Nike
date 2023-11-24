import { View, Text, Image, TouchableOpacity } from 'react-native'
import { FlatList, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from './style'
import React from 'react';
import Card from '../cardProduct/card'
import { user } from '../Favorites/product'
import { getProductBestSellers, searchProduct } from '../../service/ProductService';
export default function shop({ navigation, route }) {
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
  const dataSearch = ['Dunk', 'AirForce 1', 'Air Jodan 1', 'Air Max', 'Blazer']
  var [showNew, setShowNew] = React.useState(false)
  var [showShoes, setShowShoes] = React.useState(false)
  var [showClothing, setShowClothing] = React.useState(false)
  var [showAccessories, setShowAccessories] = React.useState(false)
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
                    navigation.navigate('Gift For You', {navigation: route.params, title: item.title, tag: item.tag})
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
            onPress={() => setShowNew(!showNew)}
          >
            <Text style={[styles.headerListItem, { color: '#FFFFFF' }]}>New & Featured</Text>
            <Image source={require('./assets/newAndFeature.png')} />
          </TouchableOpacity>
          {
            showNew ?
              <View style={styles.itemListChild}>
                <TouchableOpacity style={styles.buttonListChild}>
                  <Text style={styles.textItem}>New Releases</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonListChild}>
                  <Text style={styles.textItem}>New Releases</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonListChild}>
                  <Text style={styles.textItem}>New Releases</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonListChild}>
                  <Text style={styles.textItem}>New Releases</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonListChild}>
                  <Text style={styles.textItem}>New Releases</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonListChild}>
                  <Text style={styles.textItem}>New Releases</Text>
                </TouchableOpacity>
              </View>
              : null
          }
        </View>
        <View>
          <TouchableOpacity style={styles.buttonList}
            onPress={() => {
              setShowNew(false)
              setShowShoes(!showShoes)
              setShowClothing(false)
              setShowAccessories(false)
              setShowSale(false)
            }}
          >
            <Text style={[styles.headerListItem, { color: '#FFFFFF' }]}>Shoes</Text>
            <Image source={require('./assets/newAndFeature.png')} />
          </TouchableOpacity>
          {
            showShoes ?
              <View style={styles.itemListChild}>
                <TouchableOpacity style={styles.buttonListChild}>
                  <Text style={styles.textItem}>New Releases</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonListChild}>
                  <Text style={styles.textItem}>New Releases</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonListChild}>
                  <Text style={styles.textItem}>New Releases</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonListChild}>
                  <Text style={styles.textItem}>New Releases</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonListChild}>
                  <Text style={styles.textItem}>New Releases</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonListChild}>
                  <Text style={styles.textItem}>New Releases</Text>
                </TouchableOpacity>
              </View>
              : null
          }
        </View>
        <View>
          <TouchableOpacity style={styles.buttonList}
            onPress={() => {
              setShowNew(false)
              setShowShoes(false)
              setShowClothing(!showClothing)
              setShowAccessories(false)
              setShowSale(false)
            }}
          >
            <Text style={[styles.headerListItem, { color: '#FFFFFF' }]}>Clothing</Text>
            <Image source={require('./assets/newAndFeature.png')} />
          </TouchableOpacity>
          {
            showClothing ?
              <View style={styles.itemListChild}>
                <TouchableOpacity style={styles.buttonListChild}>
                  <Text style={styles.textItem}>New Releases</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonListChild}>
                  <Text style={styles.textItem}>New Releases</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonListChild}>
                  <Text style={styles.textItem}>New Releases</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonListChild}>
                  <Text style={styles.textItem}>New Releases</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonListChild}>
                  <Text style={styles.textItem}>New Releases</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonListChild}>
                  <Text style={styles.textItem}>New Releases</Text>
                </TouchableOpacity>
              </View>
              : null
          }
        </View>
        <View>
          <TouchableOpacity style={styles.buttonList}
            onPress={() => {
              setShowNew(false)
              setShowShoes(false)
              setShowClothing(false)
              setShowAccessories(!showAccessories)
              setShowSale(false)
            }}
          >
            <Text style={[styles.headerListItem, { color: '#FFFFFF' }]}>Accessories</Text>
            <Image source={require('./assets/newAndFeature.png')} />
          </TouchableOpacity>
          {
            showAccessories ?
              <View style={styles.itemListChild}>
                <TouchableOpacity style={styles.buttonListChild}>
                  <Text style={styles.textItem}>New Releases</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonListChild}>
                  <Text style={styles.textItem}>New Releases</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonListChild}>
                  <Text style={styles.textItem}>New Releases</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonListChild}>
                  <Text style={styles.textItem}>New Releases</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonListChild}>
                  <Text style={styles.textItem}>New Releases</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonListChild}>
                  <Text style={styles.textItem}>New Releases</Text>
                </TouchableOpacity>
              </View>
              : null
          }
        </View>
        <View>
          <TouchableOpacity style={styles.buttonList}
            onPress={() => {
              setShowNew(false)
              setShowShoes(false)
              setShowClothing(false)
              setShowAccessories(false)
              setShowSale(!showSale)
            }}
          >
            <Text style={[styles.headerListItem, { color: '#FFFFFF' }]}>Sale</Text>
            <Image source={require('./assets/newAndFeature.png')} />
          </TouchableOpacity>
          {
            showSale ?
              <View style={styles.itemListChild}>
                <TouchableOpacity style={styles.buttonListChild}>
                  <Text style={styles.textItem}>New Releases</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonListChild}>
                  <Text style={styles.textItem}>New Releases</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonListChild}>
                  <Text style={styles.textItem}>New Releases</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonListChild}>
                  <Text style={styles.textItem}>New Releases</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonListChild}>
                  <Text style={styles.textItem}>New Releases</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonListChild}>
                  <Text style={styles.textItem}>New Releases</Text>
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
              navigation.navigate('Our BestSellers', route.params)
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
                    navigation.navigate('Top Road', { navigation: route.params, title: item.title })
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

      {/* <View style={styles.item}>
        <Text style={styles.headerListItem}>Your Pegasus Shop</Text>
        <ScrollView
          nestedScrollEnabled
        >
          <FlatList data={dataWeekHighlight}
            horizontal
            renderItem={({ item }) => {
              return (
                <View style={{ marginRight: 10 }}>
                  <Image source={item.img} style={styles.imgLarge} />
                  <Text style={styles.textItem}>{item.name}</Text>
                </View>
              )
            }}
          />
        </ScrollView>
      </View>

      <View style={styles.item}>
        <Text style={styles.headerListItem}>Shop By Sport</Text>
        <ScrollView
          nestedScrollEnabled
        >
          <FlatList data={dataWeekHighlight}
            horizontal
            renderItem={({ item }) => {
              return (
                <View style={{ marginRight: 10 }}>
                  <Image source={item.img} style={styles.imgShop} />
                  <Text style={styles.textItem}>{item.name}</Text>
                </View>
              )
            }}
          />
        </ScrollView>
      </View>

      <View style={styles.item}>
        <Text style={styles.headerListItem}>Shop By Icon</Text>
        <ScrollView
          nestedScrollEnabled
        >
          <FlatList data={dataWeekHighlight}
            horizontal
            renderItem={({ item }) => {
              return (
                <View style={{ marginRight: 10 }}>
                  <Image source={item.img} style={styles.imgShop} />
                  <Text style={styles.textItem}>{item.name}</Text>
                </View>
              )
            }}
          />
        </ScrollView>
      </View> */}

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
              <TouchableOpacity style={{ marginVertical: 10, flexDirection: 'row', alignItems: 'center' }}>
                <FontAwesome style={{ marginRight: 10 }} name="search" size={24} color="black" />
                <Text style={styles.textItem}>{item}</Text>
              </TouchableOpacity>
            )
          }}
        />
      </View>

      {/* <View style={styles.item}>
        <Text style={styles.headerListItem}>Recommended For You</Text>
        <ScrollView
          nestedScrollEnabled
        >
          <FlatList data={dataCart}
            horizontal
            renderItem={({ item }) => {
              return (
                <View style={{ marginRight: 10 }}>
                  <Image source={item.img} style={styles.imgMedium} />
                  <Text style={styles.textItem}>{item.name}</Text>
                  <Text style={styles.priceItem}>{item.price} </Text>
                </View>
              )
            }}
          />
        </ScrollView>
      </View> */}

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
            navigation.navigate('Brand', { navigation: route.params, title: 'NikeLab' })
          }}
          >
            <Image source={require('./assets/brand2.png')} resizeMode='contain' style={styles.imgBrand} />
          </TouchableOpacity>
          <TouchableOpacity style={{ width: '33%', borderLeftWidth: 1, borderBottomWidth: 1, justifyContent: 'center', alignItems: 'center' }}
          onPress={() => {
            route.params.setOptions({
              headerShown: false
            })
            navigation.navigate('Brand', { navigation: route.params, title: 'Jordan' })
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
            navigation.navigate('Brand', { navigation: route.params, title: 'Nike Sportswear' })
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
            navigation.navigate('Brand', { navigation: route.params, title: 'Nike By You' })
          }}
          >
            <Image source={require('./assets/brand6.jpg')} resizeMode='contain' style={styles.imgBrand} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}