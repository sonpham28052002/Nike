import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import { TextField } from 'react-native-ui-lib';
export default function address(props) {
    const [enableText, setEnableText] = useState(false)
    const [enableButton, setEnableButton] = useState(false)

    const [dataCity, setDataCity] = useState([])
    const [valueCity, setValueCity] = useState(null);
    const [cityName, setCityName] = useState('');
    const [isFocusCity, setIsFocusCity] = useState(false);

    const [dataDistrict, setDataDistrict] = useState([])
    const [valueDistrict, setValueDistrict] = useState(null);
    const [districtName, setDistrictName] = useState('');
    const [isFocusDistrict, setIsFocusDistrict] = useState(false);

    const [dataWard, setDataWard] = useState([])
    const [valueWard, setValueWard] = useState(null);
    const [wardName, setWardName] = useState('');
    const [isFocusWard, setIsFocusWard] = useState(false);

    const [textInput, setTextInput] = useState('');
    useEffect(() => {
        fetch('https://provinces.open-api.vn/api/')
            .then(response => response.json())
            .then(data => setDataCity(data))
    }, [])

    useEffect(() => {
        if (valueCity)
            fetch(`https://provinces.open-api.vn/api/p/${valueCity}?depth=2`)
                .then(response => response.json())
                .then(data => setDataDistrict(data.districts))
    }, [valueCity])

    useEffect(() => {
        if (valueDistrict)
            fetch(`https://provinces.open-api.vn/api/d/${valueDistrict}?depth=2`)
                .then(response => response.json())
                .then(data => setDataWard(data.wards))
    }, [valueDistrict])

    useEffect(() => {
        if (valueWard)
            setEnableText(true)
        else
            setEnableText(false)
    }, [valueWard])

    return (
        <View style={{ width: 300, height: 250, justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.container}>
                <View style={styles.viewInput}>
                    <TextField
                        style={styles.input}
                        editable={enableText}
                        placeholder='Enter your address'
                        placeholderTextColor={'gray'}
                        value={textInput}
                        onChangeText={setTextInput}
                    />
                </View>
                <View style={styles.border}>
                    <Text style={styles.titleBorder}>Cities</Text>
                    <Dropdown
                        style={[styles.dropdown, isFocusCity && { borderColor: 'blue' }]}
                        data={dataCity}
                        search
                        inputSearchStyle={{
                            height: 30,
                            fontSize: 20,
                        }}
                        searchPlaceholder='Search Cities...'
                        labelField="name"
                        valueField="code"
                        placeholder={!isFocusCity ? 'Select City' : '...'}
                        value={valueCity}
                        onFocus={() => setIsFocusCity(true)}
                        onBlur={() => setIsFocusCity(false)}
                        onChange={item => {
                            setValueCity(item.code);
                            setIsFocusCity(false);
                            setCityName(item.name)
                        }}
                    />
                </View>
                <View style={styles.border}>
                    <Text style={styles.titleBorder}>Districts</Text>
                    <Dropdown
                        style={[styles.dropdown, isFocusDistrict && { borderColor: 'blue' }]}
                        data={dataDistrict}
                        search
                        inputSearchStyle={{
                            height: 30,
                            fontSize: 20,
                        }}
                        searchPlaceholder='Search District...'
                        labelField="name"
                        valueField="code"
                        placeholder={!isFocusDistrict ? 'Select District' : '...'}
                        value={valueDistrict}
                        onFocus={() => setIsFocusDistrict(true)}
                        onBlur={() => setIsFocusDistrict(false)}
                        onChange={item => {
                            setValueDistrict(item.code);
                            setIsFocusDistrict(false);
                            setDistrictName(item.name)
                        }}
                    />
                </View>
                <View style={styles.border}>
                    <Text style={styles.titleBorder}>Wards</Text>
                    <Dropdown
                        style={[styles.dropdown, isFocusWard && { borderColor: 'blue' }]}
                        data={dataWard}
                        search
                        inputSearchStyle={{
                            height: 30,
                            fontSize: 20,
                        }}
                        searchPlaceholder='Search Ward...'
                        labelField="name"
                        valueField="code"
                        placeholder={!isFocusWard ? 'Select Ward' : '...'}
                        value={valueWard}
                        onFocus={() => setIsFocusWard(true)}
                        onBlur={() => setIsFocusWard(false)}
                        onChange={item => {
                            setValueWard(item.code);
                            setIsFocusWard(false);
                            setWardName(item.name)
                        }}
                    />
                </View>
                <View style={styles.viewButton}>
                    <TouchableOpacity style={styles.button}
                        onPress={() => {
                            if (textInput != '' && wardName != '' && districtName != '' && cityName != '')
                                props.callBack(`${textInput}, ${wardName}, ${districtName}, ${cityName}`)
                        }}
                    >
                        <Text style={styles.text}>Create Address</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleBorder: {
        position: 'absolute',
        top: '-27%',
        left: '5%',
        color: 'lightblue',
        backgroundColor: 'white'
    },
    border: {
        borderWidth: 1,
        borderColor: 'lightblue',
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: '5%',
    },
    viewInput: {
        width: '100%',
        paddingHorizontal: '5%',
        borderWidth: 1,
        paddingVertical: '2%'
    },
    input: {
        width: '90%',
        height: '100%',
        fontSize: 20
    },
    dropdown: {
        width: '100%',
        height: '100%',
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    text: {
        fontSize: 20,
    },
    viewButton: {
        width: '100%'
    },
    button: {
        width: '100%',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        backgroundColor: 'lightblue',
        paddingHorizontal: '5%',
        paddingVertical: '2%'
    },
    textButton: {
        fontSize: 25,
        fontWeight: 500,
        color: '#FFFFFF'
    }
});