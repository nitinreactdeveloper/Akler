import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, PixelRatio, TextInput, Image, ScrollView, ImageBackground, Dimensions, Modal, TouchableWithoutFeedback } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5'
import { AuthContext } from '../../navigation/AuthProvider'
import BaseScreen from '../../components/Basescreen'
import Input from '../../components/Input'
import Button from '../../components/Button'
import moment from 'moment/moment'
import Entypo from 'react-native-vector-icons/dist/Entypo'
import { BaseButton } from 'react-native-gesture-handler'

const themeColor = '#F5CF04'





const Profile = ({ navigation }) => {
    return (
        <BaseScreen


            logo={
                <ImageBackground source={require('../../assets/images/ProfileBackGround.png')}
                    style={{
                        width: 440,
                        height: 200,
                        top: 60,
                        alignItems: 'center'
                    }}
                >
                    <View
                        style={{ flexDirection: 'row', alignItems: 'center', width: '90%', top: 10 }}
                    >
                        <TouchableOpacity
                            style={{ right: 10 }}
                            onPress={() => navigation.goBack()}>
                            <MaterialIcons color={'#fff'} name='arrow-back' size={25}></MaterialIcons>
                        </TouchableOpacity>
                        <Text style={{
                            width: '80%',
                            textAlign: 'center',
                            fontSize: 16,
                            fontWeight: '400',
                            color: '#fff', fontFamily: "Roboto"
                        }}>Profile</Text>


                    </View>
                </ImageBackground>
            }

            renderChild={Content({ navigation })} navigation={navigation} paddingTop={false} paddingHorizontal={false} />
    )
}


const Content = ({ navigation }) => {

    const { BaseUrl, appData, userDetails, userToken, logout } = useContext(AuthContext)



    return (

        <View style={styles.contentScroll}>
            <View style={{ width: '22%', top: 20, alignSelf: 'center' }}>
                <Image source={require('../../assets/images/profileImage.png')} />
            </View>
            <Text style={{ width: '100%', textAlign: 'center', marginTop: 20, fontSize: 14, fontFamily: 'Roboto', fontWeight: '600', color: '#000', left: 5 }}>
                Nitin
            </Text>
            <Text style={{ width: '100%', textAlign: 'center', fontSize: 10, fontFamily: 'Roboto', fontWeight: '600', color: '#000', left: 5 }}>
                Kings Road, Delhi
            </Text>
            <ScrollView showsVerticalScrollIndicator={false}>

                <Text style={[styles.subHeading, { marginBottom: 5, left: 5, top: 10 }]}>UserName</Text>
                <Text style={styles.cardWrapper}> Nitin</Text>
                <Text style={[styles.subHeading, { marginBottom: 5, left: 5, top: 10 }]}>Unique Id</Text>
                <Text style={styles.cardWrapper}> Nitin@123</Text>
                <Text style={[styles.subHeading, { marginBottom: 5, left: 5, top: 10 }]}>Email</Text>
                <Text style={styles.cardWrapper}> nitin@techninza.in</Text>
                <Text style={[styles.subHeading, { marginBottom: 5, left: 5, top: 10 }]}>Mobile</Text>
                <Text style={styles.cardWrapper}> 7015******</Text>
                <Text style={[styles.subHeading, { marginBottom: 5, left: 5, top: 10 }]}>Password</Text>

                <Text style={styles.cardWrapper}> R****</Text>
                <TouchableOpacity onPress={() => { navigation.navigate('Comments') }}>
                    <Text style={[styles.cardWrapper]}>Comments</Text>
                </TouchableOpacity>

                <Text style={[styles.subHeading, { marginBottom: 5, left: 5, top: 10 }]}>Contact us</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 10 }}>
                    <Text style={[styles.subHeading, { width: '60%', left: 15, marginTop: 5 }]}>Share your Profile and invite other to the akler Platform</Text>
                    <MaterialIcons name='share' size={20} color={'#000'} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 10 }}>
                    <Text style={[styles.subHeading, { width: '60%', left: 15, marginTop: 5 }]}>Rate Us</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <MaterialIcons name='star' size={20} color={'#F3DE1B'} />
                        <MaterialIcons name='star' size={20} color={'#F3DE1B'} />
                        <MaterialIcons name='star' size={20} color={'#F3DE1B'} />
                        <MaterialIcons name='star' size={20} color={'#F3DE1B'} />
                        <MaterialIcons name='star' size={20} color={'#F3DE1B'} />

                    </View>


                </View>



                <Button title={'logOut'}
                    onPress={() => logout()}
                />

            </ScrollView>

        </View>



    )
}

export default Profile

const styles = StyleSheet.create({
    contentScroll: {
        display: 'flex',
        height: '100%',
        width: '100%',
        position: 'relative',
        paddingTop: 10,
        paddingBottom: 100,
        marginTop: 100
    },
    heading: {
        // fontSize: 18,
        fontSize: PixelRatio.getPixelSizeForLayoutSize(7),
        color: '#000',
        fontFamily: "Roboto-Bold",
        marginBottom: 5,
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
        fontSize: 14,
        color: '#938888',
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
        color: '#000',
        fontFamily: 'Roboto',
        fontWeight: '600',
        // flexDirection: 'row',
        fontSize: 16,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: 'left',
        // left: 7,
        paddingLeft: 20,
        width: '95%',
        // height: PixelRatio.getPixelSizeForLayoutSize(40),
        // marginBottom: 15,
        marginHorizontal: 8,
        marginVertical: 5,
        backgroundColor: '#fff',
        borderRadius: 8,
        marginRight: 10,
        borderColor: '#fcfcfc',
        elevation: 3,
        shadowColor: '#000',
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
    },
    postWrapper: {
        marginTop: 10,
        // marginLeft: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 20,
        width: '100%',
        justifyContent: 'center',
        alignSelf: "center",
        backgroundColor: '#fff',
        borderRadius: 11,
        borderColor: '#fcfcfc',
        elevation: 3,
        shadowColor: '#000',
    },
    imgcard: {
        width: 51,
        height: 51,
        marginHorizontal: 10
    }

})