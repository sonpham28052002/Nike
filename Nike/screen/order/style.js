import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    
    viewContain: {
        flexDirection: 'row',
        width: '100%',
    },
    img: {
        width: '25%',
        height: 100,
        borderWidth: 1,
        borderRadius: 10,
        padding: 1,
        margin: 5,
    },
    viewTitle: {
        width: '47%',
        marginTop: 5,
        marginHorizontal: 5
    },
    text: {
        fontSize: 20,
        fontWeight: 500,
    },
    textDescription: {
        fontSize: 15,
        fontWeight: 500,
        color: 'gray'
    },
    textQuantity: {
        fontSize: 18,
        fontWeight: 500,
        marginHorizontal: 5
    },
    textPriceOld: {
        fontSize: 14,
        color: "gray",
        textDecorationLine: "line-through"
    },
    textPriceNew: {
        fontSize: 20,
        fontWeight: 500,
        color: 'red'
    },
    viewButton: {
        width: '20%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    viewCheckOut: {
        height: '17%',
        borderTopWidth: 1,
        backgroundColor: 'lightgray',
        padding: 10,
        width: '100%',
        justifyContent: 'space-between'
    },
    textTotal: {
        fontSize: 25,
        fontWeight: 700
    },
    textTotalPrice: {
        fontSize: 25,
        fontWeight: 700,
        color: 'red'
    },
    buttonCheckOut: {
        height: 50,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textCheckOut: {
        fontSize: 30,
        color: 'white',
        fontWeight: 700
    }
})