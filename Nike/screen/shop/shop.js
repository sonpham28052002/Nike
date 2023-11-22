import { View, Text, Image } from 'react-native'
import { FlatList, ScrollView } from 'react-native';
import styles from './style'
export default function shop() {
  const data = [{
    name: 'name 1',
    img: require('./assets/speed.jpg')
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
  return (
    <View style={{flex: 1}}>
      <Text>This Week’s Highlights</Text>
      <ScrollView
        nestedScrollEnabled
        horizontal
      >
        <FlatList data={data}
          horizontal
          renderItem={({ item }) => {
            return (
              <View style={{marginRight: 10}}>
                <Image source={item.img} style={styles.img} />
                <Text>{item.name}</Text>
              </View>
            )
          }}
        />
      </ScrollView>
    </View>
  );
}