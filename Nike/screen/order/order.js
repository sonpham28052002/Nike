import React from "react";
import {
  View,
  Dimensions,
  FlatList,
  Animated,
} from "react-native";
import { getAllOrderDetail } from "../../service/OrderService";
import { useSelector } from "react-redux";
import Orderdetail from "./order_detail";
export default function order() {
  var user = useSelector((state) => state.data);
  var [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    getAllOrderDetail((data) => setProducts(data), user.id);
  }, []);

  const height = Dimensions.get("window").height;
  const animated = React.useRef(new Animated.Value(height * 0.11)).current;
  const [expanded, setExpanded] = React.useState(false);
  let i =0
  return (
    <View
      style={{
        flex: 1,
        maxHeight: 695,
        height: 695,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal:10
      }}
    >
      <FlatList 
        data={products}
        keyExtractor={()=> i++}
        renderItem={({item})=>{
          return(<Orderdetail value={item}/>)
        }}
      />
    </View>
  );
}
