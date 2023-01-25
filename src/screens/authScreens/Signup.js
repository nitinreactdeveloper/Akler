import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, PixelRatio, TextInput, Image, ScrollView, ImageBackground, Dimensions } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5'
import { AuthContext } from '../../navigation/AuthProvider'
import BaseScreen from '../../components/Basescreen'
import Input from '../../components/Input'
import Button from '../../components/Button'
import moment from 'moment/moment'

const themeColor = '#F5CF04'





const Signup = ({ navigation }) => {
    return (
        <BaseScreen


            title={''}
            renderChild={Content({ navigation })} navigation={navigation} leftButton={true} paddingTop={false}
        />
    )
}


const Content = ({ navigation }) => {

    const { BaseUrl, appData, userDetails, userToken } = useContext(AuthContext)


    const activeColor = "#F5CF04"
    // const [name, setName] = useState(userDetails.cust_name)
    const [search, setSearch] = useState('')



    return (
        <ScrollView style={styles.contentScroll} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'handled'}>

            <Text style={[styles.heading, { textAlign: 'center' }]}>Sign UP</Text>
            <Text style={[styles.heading, { fontSize: 16, fontWeight: '400', marginBottom: 50, textAlign: 'center', color: '#9E9696' }]}> Please sign up here</Text>

            <TouchableOpacity style={[styles.signupbtn, {backgroundColor: '#539BEF'}]}
                onPress={() => { navigation.navigate('MobileLogin') }}>
                <FontAwesome5 name='facebook' size={22} color='#fff' style={{ marginRight: 20 }}></FontAwesome5>
                <Text style={[styles.subHeading, {
                    color: '#fff',
                    fontFamily: "Roboto-Bold",
                }]}>Continue with Mobile</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.signupbtn, {backgroundColor: '#3228C5'}]}
                onPress={() => { navigation.navigate('Signup') }}>
                <FontAwesome5 name='facebook' size={22} color='#fff' style={{ marginRight: 20 }}></FontAwesome5>
                <Text style={[styles.subHeading, {
                    color: '#fff',
                    fontFamily: "Roboto",
                }]}>Continue with facebook</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.signupbtn , {backgroundColor: '#D9D9D9'}]}
                onPress={() => { navigation.navigate('Signup') }}>
                <FontAwesome5 name='facebook' size={22} color='#fff' style={{ marginRight: 20 }}></FontAwesome5>
                <Text style={[styles.subHeading, {
                    color: '#000',
                    fontFamily: "Roboto-Bold",
                }]}>Continue with Email</Text>
            </TouchableOpacity>
        </ScrollView>

    )
}

export default Signup

const styles = StyleSheet.create({
    contentScroll: {
        display: 'flex',
        height: '100%',
        width: '100%',
        position: 'relative',
        paddingTop: 10,
    },
    heading: {
        // fontSize: 18,
        fontSize: 24,
        color: '#000',
        fontFamily: "Roboto",
        marginBottom: 5,
        fontWeight: '600'
    },
    signupbtn: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 45,
        borderRadius: 6,
        backgroundColor: '#23BE16',
        marginBottom: 15,
    },
    subHeadingBold: {
        // fontSize: 16,
        fontSize: PixelRatio.getPixelSizeForLayoutSize(6),
        color: '#000',
        fontFamily: "Roboto-SemiBold",
    },
    subHeading: {
        // fontSize: 16,
        fontSize: PixelRatio.getPixelSizeForLayoutSize(5),
        color: '#000',
        fontWeight: '600',
        fontFamily: "Roboto-Medium",
    },
    smTxt: {
        // fontSize: 12,
        fontSize: PixelRatio.getPixelSizeForLayoutSize(4.5),
        color: '#000',
        fontFamily: 'Roboto-Regular'
    },
    regTxt: {
        // fontSize: 14,
        fontSize: PixelRatio.getPixelSizeForLayoutSize(5.5),
        color: '#000',
        fontFamily: 'Roboto-Regular'
    },
    fontMedium: {
        fontFamily: 'Roboto-Medium'
    },

    cardWrapper: {
        alignSelf: "center",
        display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        paddingTop: 10,
        left: 7,
        // width: '48%',
        // height: PixelRatio.getPixelSizeForLayoutSize(60),
        // marginBottom: 15,
        marginHorizontal: 8,
        // backgroundColor: '#fff',
        // borderRadius: 8,
        // borderColor: '#fcfcfc',
        // elevation: 3,
        // shadowColor: '#000',
        // for ios below 
        // shadowOffset: { width: 5, height: 5 }
    },
    rowAlign: {
        display: 'flex', flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    rowWrap: {
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 5,
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20
    },
    iconTxtBtn: {
        display: 'flex', flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        height: 35,
        paddingHorizontal: 10,
    },
    badge: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 90,
        height: 25,
        borderRadius: 5,
        backgroundColor: '#2a2',
    },
    secondaryBtn: {
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center',
        alignItems: 'flex-end',
        width: 70,
        height: 25,
        borderRadius: 5,
        backgroundColor: '#fff',
        // borderWidth: 1,
        borderColor: themeColor,
    },
    secondaryBtnTxt: {
        fontSize: PixelRatio.getPixelSizeForLayoutSize(5.5),
        color: themeColor,
        // fontFamily: 'Roboto-Bold',
        fontFamily: 'Roboto-Medium',
    },
    subHeading1: {
        // fontSize: 16,
        // fontSize: PixelRatio.getPixelSizeForLayoutSize(6),
        color: '#000',
        fontFamily: "Roboto-Medium",
    }

})