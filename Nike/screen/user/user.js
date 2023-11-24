import {View,Text, TouchableOpacity} from 'react-native'
export default function user({navigation}) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity onPress={()=>{navigation.navigate("Home")}}><Text>User Screen</Text></TouchableOpacity>
      </View>
    );
  }