import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    textTitle: {
        fontSize: 30,
        fontWeight: 700,
        marginVertical: 30
    },
    viewInfo: {
        flexDirection: 'row'
    },
    viewIcon: {
        width: '10%',
        alignItems: 'center',
        paddingTop: 15
    },
    viewTextInfo: {
        width: '90%',
        marginHorizontal: 10,
        justifyContent: 'center'
    },
    buttonUpdate:{
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: 'lightblue',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        borderWidth: 1,
        borderColor: 'gray',
        // paddingVertical: 5,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textSubTitle: {
        fontSize: 25,
        paddingHorizontal: 10,
        marginVertical: 10,
        fontWeight: 500
    },
    viewButton: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 10,
        marginTop: 20,
        borderBottomWidth: 1,
        borderColor: 'gray'
    },
    buttonNavigate: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
        width: '20%'
    }
})