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

const themeColor = '#F5CF04'





const Mention = ({ navigation }) => {
    return (
        <BaseScreen


            title={'Mention'}
            renderChild={Content({ navigation })} navigation={navigation} leftButton={true} paddingTop={false}
        />
    )
}


const Content = ({ navigation }) => {

    const { BaseUrl, appData, userDetails, userToken } = useContext(AuthContext)

    const Data = [
        {
            id: 1, title: 'Mayank', img: require('../../assets/images/mention.png'), msg: `It was @virat’s bday. we had a great day. The cake was really good . I hope the year ahead brings in a lot of happiness, prosperity, and good luck to him.`,
        },
        {
            id: 2, title: 'Mayank', img: require('../../assets/images/mention.png'), msg: `It was @virat’s bday. we had a great day. The cake was really good . I hope the year ahead brings in a lot of happiness, prosperity, and good luck to him.`,
        },
        {
            id: 3, title: 'Mayank', img: require('../../assets/images/mention.png'), msg: `It was @virat’s bday. we had a great day. The cake was really good . I hope the year ahead brings in a lot of happiness, prosperity, and good luck to him.`,
        },
        {
            id: 4, title: 'Mayank', img: require('../../assets/images/mention.png'), msg: `It was @virat’s bday. we had a great day. The cake was really good . I hope the year ahead brings in a lot of happiness, prosperity, and good luck to him.`,
        },
    ]



    return (

        <View style={styles.contentScroll}>

            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                <Text style={styles.smTxt}>8 Jan 2022</Text>
                <Text style={styles.smTxt}>Today</Text>

            </View>

            <ScrollView style={styles.contentScroll} showsVerticalScrollIndicator={false}>
                {Data.map((item, index) =>

                    <TouchableOpacity key={index} style={styles.cardWrapper}>

                        <View style={{ left: 10, top: 5 }}>
                            <Image source={item.img} style={{width:62, height: 62}} />
                            <Text style={[styles.smTxt, { left: 10 }]}>{item.title}</Text>

                        </View>
                        <Text style={{
                            textAlign: 'left',

                            width: '70%',
                            marginHorizontal: 5, fontFamily: 'Roboto', color: '#000000', fontWeight: '400', fontSize: 14, left: 15
                        }}>{item.msg}</Text>





                    </TouchableOpacity>

                )}


            </ScrollView>
        </View>



    )
}

export default Mention

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
        // justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 20,
marginTop: 10,
        // left: 7,
        width: '95%',
        height: PixelRatio.getPixelSizeForLayoutSize(50),
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

})