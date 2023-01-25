import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5'

const Input = ({ height, width, error, ...rest }) => {

    return (
        <TextInput
            style={[styles.Input, { width: width ? width : '99%', height: height ? height : 50, borderColor: error ? '#f00' : '#18181C', }]}
            placeholderTextColor="#aaa"
            {...rest}
        ></TextInput>
    )
}

export default React.memo(Input)

const styles = StyleSheet.create({
    Input: {
        alignSelf: 'center',
        width: '99%',
        height: '100%',
        paddingLeft: 10,
        // backgroundColor :"#",
        marginBottom: 15,
        fontSize: 14,
        color: '#000',
        // borderWidth: 1,
        borderRadius: 6,
        borderColor: "#aaa",
        fontFamily: "Roboto-Regular",
        backgroundColor: '#fff',
        elevation: 3,
        shadowColor: '#000',
        // for ios below 
        shadowOffset: { width: 5, height: 5 }
    },
})
