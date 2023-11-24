import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    item: {
        marginTop: 30,
        paddingHorizontal: 15
    },
    itemList: {
        marginTop: 30
    },
    itemListChild:{
        paddingHorizontal: 15
    },
    buttonList: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 5,
        justifyContent: 'space-between',
        backgroundColor: 'lightblue',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 35
    },
    buttonListChild:{
        borderBottomWidth: 1,
        borderColor: 'gray',
        height: 70,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    imgSmall: {
        width: 120,
        height: 120,
        borderRadius: 10
    },
    imgMedium: {
        width: 115,
        height: 115,
    },
    imgLarge: {
        width: 130,
        height: 130,
    },
    imgShop: {
        width: 130,
        height: 100,
        borderRadius: 10
    },
    imgBrand: {
        width: 100,
        height: 90
    },
    headerListItem: {
        fontSize: 25,
        fontWeight: 700,
        marginVertical: 10
    },
    textItem: {
        fontSize: 20,
        fontWeight: 600
    },
    priceItem: {
        fontSize: 18,
        fontWeight: 500,
        color: 'gray'
    },
    buttonViewAll: {
        width: 115,
        marginTop: 30,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 1
    },
    input:{
        // width: '80%',
        backgroundColor: '#FFFFFF',
        fontSize: 20,
        height: 30,
        paddingHorizontal: 10
    }
})

export default styles;