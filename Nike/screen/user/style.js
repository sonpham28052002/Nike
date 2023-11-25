import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    textTitle: {
        fontSize: 30,
        fontWeight: 700,
        marginVertical: 30
    },
    button: {
        borderWidth: 1,
        borderColor: 'gray',
        paddingVertical: 10,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textSubTitle: {
        fontSize: 25,
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
    buttonNavigate:{
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
        width: '20%'
    }
})