import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, PixelRatio, TextInput, Image, ScrollView, ImageBackground, Dimensions, Modal, TouchableWithoutFeedback, FlatList } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5'
import { AuthContext } from '../../navigation/AuthProvider'
import BaseScreen from '../../components/Basescreen'
import Input from '../../components/Input'
import Button from '../../components/Button'
import moment from 'moment/moment'
import Entypo from 'react-native-vector-icons/dist/Entypo'

const themeColor = '#F5CF04'





const Message = ({ navigation }) => {
    return (
        <BaseScreen


            title={'Messages'}
            renderChild={Content({ navigation })} navigation={navigation} leftButton={true} paddingTop={false}
        />
    )
}


const Content = ({ navigation }) => {

    const { BaseUrl, appData, userDetails, userToken } = useContext(AuthContext)

    const Data = [
        {
            id: 1, title: 'Mayank', img: require('../../assets/images/mention.png'),
        },
        {
            id: 2, title: 'Mayank', img: require('../../assets/images/mention.png'),
        },
        {
            id: 3, title: 'Mayank', img: require('../../assets/images/mention.png'),
        },
        {
            id: 4, title: 'Mayank', img: require('../../assets/images/mention.png'),
        }, {
            id: 5, title: 'Mayank', img: require('../../assets/images/mention.png'),
        }, {
            id: 6, title: 'Mayank', img: require('../../assets/images/mention.png'),
        }, {
            id: 7, title: 'Mayank', img: require('../../assets/images/mention.png'),
        },
    ]


    const Messages = [

        {
            id: 1,
            userName: 'Nitin', userimg: require('../../assets/images/mention.png'), messagetime: '4 mins ago', Messagetxt: 'Hey there, this is my test for a post of my social app '
        }, {
            id: 2,
            userName: 'Hemant', userimg: require('../../assets/images/mention.png'), messagetime: '4 mins ago', Messagetxt: 'Hey there, this is my test for a post of my social app '
        }, {
            id: 3,
            userName: 'Mohit', userimg: require('../../assets/images/mention.png'), messagetime: '4 mins ago', Messagetxt: 'Hey there, this is my test for a post of my social app '
        },

    ]



    return (

        <View style={styles.contentScroll}>

            <View style={{ flexDirection: 'row', width: '100%', backgroundColor: '#CDCDCD', alignItems: 'center', justifyContent: 'space-around', borderRadius: 8 }}>
                <MaterialIcons name="search" size={20} color={'#fff'} />
                <TextInput placeholder='search' style={{ width: '90%' }} />

            </View>

            <ScrollView horizontal={true}
                showsHorizontalScrollIndicator={false}>

                {Data.map((item, index) =>

                    <View key={index} style={styles.imgcard} >
                        <View style={{ position: 'absolute', top: 6, left: 3, zIndex: 1 }}>
                            <Entypo name='dot-single' color={'#34FF01'} size={30} />
                        </View>
                        <Image source={item.img} style={{ margin: 10, width: 51, height: 51 }} />
                    </View>

                )}


            </ScrollView>
            <View style={{ height: '80%' }}>
                <ScrollView showsVerticalScrollIndicator={false}>

                    {Messages.map((item, index) =>

                        <TouchableOpacity key={index} style={styles.cardWrapper} onPress={()=>{navigation.navigate('Chat' , {username : item.userName})}} >

                            <Image source={item.userimg} style={styles.userimage} />
                            <View style={{ left: 10, top: 5, width: '75%' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={styles.username}>{item.userName}</Text>
                                    <Text style={styles.usermessagetime}>{item.messagetime}</Text>
                                </View>
                                <Text style={styles.msgtxt}>{item.Messagetxt}</Text>
                            </View>

                        </TouchableOpacity>



                    )}


                </ScrollView>
            </View>

        </View >



    )
}

export default Message

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
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 20,
        left: 1,
        width: '100%',
        height: PixelRatio.getPixelSizeForLayoutSize(40),
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
        marginHorizontal: 10,

    },
    messagecard: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    UserInfo: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        paddingTop: 15,
        paddingBottom: 15
    },
    card: {
        width: '100%'
    },

    userimage: {
        width: 50,
        height: 50,
        top: 10,
        borderRadius: 25

    },
    username: {
        fontSize: 16,
        color: '#000',
        fontWeight: '500',
        fontFamily: 'Roboto'

    },
    usermessagetime: {
        fontSize: 12,
        fontFamily: 'Roboto',
        fontWeight: '400',
        color: '#EF5353',

    },
    msgtxt:{
        fontSize: 14,
        fontFamily: 'Roboto', 
        color: '#000',
        fontWeight: '500'
    }

})