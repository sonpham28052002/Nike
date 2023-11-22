import { View, Text, Image, TouchableOpacity } from 'react-native'
import { FlatList, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from './style'
import React from 'react';
export default function shop() {
  const data = [{
    name: 'Sneakers of the Week',
    img: require('./assets/sneakersOfTheWeek.png')
  },
  {
    name: 'name 2',
    img: require('./assets/speed.jpg')

  },
  {
    name: 'name 3',
    img: require('./assets/speed.jpg')

  },
  {
    name: 'name 4',
    img: require('./assets/speed.jpg')

  },
  {
    name: 'name 5',
    img: require('./assets/speed.jpg')

  },
  {
    name: 'name 6',
    img: require('./assets/speed.jpg')

  },
  {
    name: 'name 7',
    img: require('./assets/speed.jpg')

  }


  ]
  const dataCart = [{
    name: 'name 1',
    img: require('./assets/speed.jpg'),
    price: '3.829.000 đ'
  },
  {
    name: 'name 2',
    img: require('./assets/speed.jpg'),
    price: '3.829.000 đ'

  },
  {
    name: 'name 3',
    img: require('./assets/speed.jpg'),
    price: '3.829.000 đ'

  },
  {
    name: 'name 4',
    img: require('./assets/speed.jpg'),
    price: '3.829.000 đ'

  },
  {
    name: 'name 5',
    img: require('./assets/speed.jpg'),
    price: '3.829.000 đ'

  },
  {
    name: 'name 6',
    img: require('./assets/speed.jpg'),
    price: '3.829.000 đ'

  }]
  const dataSearch = ['Dunk', 'AirForce 1', 'Air Jodan 1', 'Air Max', 'Blazer']
  const dataBrand = [require('./assets/brand1.png'), require('./assets/brand2.png'), require('./assets/brand3.png'), require('./assets/brand4.png'), require('./assets/brand5.png'), require('./assets/brand6.jpg')]
  var [showNew, setShowNew] = React.useState(false)
  var [showShoes, setShowShoes] = React.useState(false)
  var [showClothing, setShowClothing] = React.useState(false)
  var [showAccessories, setShowAccessories] = React.useState(false)
  var [showSale, setShowSale] = React.useState(false)
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.item}>
        <Text style={styles.headerListItem}>This Week’s Highlights</Text>
        <ScrollView
          nestedScrollEnabled
        >
          <FlatList data={data}
            horizontal
            renderItem={({ item }) => {
              return (
                <TouchableOpacity style={{ marginRight: 10, width: 110 }}>
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
          <FlatList data={data}
            horizontal
            renderItem={({ item }) => {
              return (
                <View style={{ marginRight: 10 }}>
                  <Image source={item.img} style={styles.imgSmall} />
                  <Text style={styles.textItem}>{item.name}</Text>
                </View>
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
        <FlatList data={dataCart}
          numColumns={3}
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
        <View style={{
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <TouchableOpacity style={styles.buttonViewAll}>
            <Text style={styles.textItem}>View All</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.item}>
        <Text style={styles.headerListItem}>Explore Our Top Road - Running Shoes</Text>
        <ScrollView
          nestedScrollEnabled
        >
          <FlatList data={data}
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
        <Text style={styles.headerListItem}>Your Pegasus Shop</Text>
        <ScrollView
          nestedScrollEnabled
        >
          <FlatList data={data}
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
          <FlatList data={data}
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
          <FlatList data={data}
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
        <Text style={styles.headerListItem}>Just In</Text>
        <FlatList data={dataCart}
          numColumns={3}
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
        <View style={{
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <TouchableOpacity style={styles.buttonViewAll}>
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

      <View style={styles.item}>
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
      </View>

      <View style={[styles.item, { marginBottom: 10 }]}>
        <Text style={styles.headerListItem}>Shop By Brand</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity style={{ width: '33%', borderBottomWidth: 1, borderRightWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('./assets/brand1.png')} resizeMode='contain' style={styles.imgBrand} />
          </TouchableOpacity>
          <TouchableOpacity style={{ width: '33%', borderLeftWidth: 1, borderBottomWidth: 1, borderRightWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('./assets/brand2.png')} resizeMode='contain' style={styles.imgBrand} />
          </TouchableOpacity>
          <TouchableOpacity style={{ width: '33%', borderLeftWidth: 1, borderBottomWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('./assets/brand3.png')} resizeMode='contain' style={styles.imgBrand} />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity style={{ width: '33%', borderRightWidth: 1, borderTopWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('./assets/brand4.png')} resizeMode='contain' style={styles.imgBrand} />
          </TouchableOpacity>
          <TouchableOpacity style={{ width: '33%', borderTopWidth: 1, borderRightWidth: 1, borderLeftWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('./assets/brand5.png')} resizeMode='contain' style={styles.imgBrand} />
          </TouchableOpacity>
          <TouchableOpacity style={{ width: '33%', borderLeftWidth: 1, borderTopWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('./assets/brand6.jpg')} resizeMode='contain' style={styles.imgBrand} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}