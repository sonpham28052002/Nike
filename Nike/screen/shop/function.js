import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const setOptionDrawer = (navigation, routeParams) => {
    navigation.setOptions({
        headerLeft: () => (
            <TouchableOpacity
                onPress={() => {
                    routeParams.setOptions({
                        headerShown: true
                    })
                    navigation.navigate("Shop", routeParams);
                }}
            >
                <AntDesign
                    style={{ marginLeft: 20 }}
                    name="arrowleft"
                    size={24}
                    color="black"
                />
            </TouchableOpacity>
        )
    })
}


export { setOptionDrawer };