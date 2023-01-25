import React, { useState, useEffect, useContext, useCallback } from 'react'
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
import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat'
const themeColor = '#F5CF04'





const Chat = ({ navigation, route }) => {
    return (
        <BaseScreen

            title={false} renderChild={Content({ navigation, route })} navigation={navigation} paddingTop={false}
            leftButton={false}
        />

    )
}


const Content = ({ navigation, route }) => {
    const [messages, setMessages] = useState([]);
    const { BaseUrl, appData, userDetails, userToken } = useContext(AuthContext)


    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello Developer',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any'
                },
            },
            {
                _id: 2,
                text: 'Hello World',
                createdAt: new Date(),
                user: {
                    _id: 1,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any'
                },
            },
        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])


    const renderBubble = (props) => {
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    right: {
                        backgroundColor: '#2364e5'
                    }
                }}
                textStyle={{
                    right: {
                        color: '#fff'
                    }
                }}


            />
        )
    }

    const renderSend = (props) => {
        return (
            <Send {...props}>
                <View>
                    <MaterialCommunityIcons name='send-circle' size={32} color={'#2e64e5'} 
                    style={{marginBottom: 5, marginRight: 5}}
                    />
                </View>
            </Send>
        )
    }


    const scrollBottomComponent = (props) =>{
        return(
            <FontAwesome5 name='angle-double-down' size={22} color='#333'/>
        )
    }

    return (
        <View style={styles.contentScroll}>
            <GiftedChat

                placeholder='Write something here'
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1,
                }}
                renderBubble={renderBubble}
                alwaysShowSend
                renderSend={renderSend}
                scrollToBottom
                scrollToBottomComponent={scrollBottomComponent}
            />
        </View>



    )
}

export default Chat


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
        left: 7,
        paddingLeft: 20,
        width: '100%',
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