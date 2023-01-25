import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, PixelRatio, TextInput, Image, ScrollView, ImageBackground, Dimensions, StatusBar } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import Feather from 'react-native-vector-icons/dist/Feather'
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons'
import Entypo from 'react-native-vector-icons/dist/Entypo'
import Octicons from 'react-native-vector-icons/dist/Octicons'
import Dialog, {
    DialogTitle,
    DialogContent,
    DialogFooter,
    DialogButton,
    SlideAnimation,
    ScaleAnimation,
} from 'react-native-popup-dialog';

import { AuthContext } from '../../navigation/AuthProvider'
import BaseScreen from '../../components/Basescreen'
import Input from '../../components/Input'
import Button from '../../components/Button'
import moment from 'moment/moment'




const themeColor = '#F5CF04'



const HomeScreen = ({ navigation }) => {


    return (
        <BaseScreen
            logo={<View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', top: 5 }}>
                    <Image
                        style={{ left: 10, top: 8, width: 42, height: 42 }}
                        source={require('../../assets/images/Profile.png')} />
                    <View style={{ left: 16, top: 8 }}>
                        <Text style={{ fontSize: 16, fontWeight: '500', fontFamily: 'Roboto', color: '#000000' }}>Hi,Nitin</Text>
                        <Text style={{ fontSize: 12, fontWeight: '400', fontFamily: 'Roboto', color: '#7D7575' }}>8 Jan 2022</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', top: 8, right: 5 }}>
                    <TouchableOpacity style={styles.cardWrapper}>
                        <EvilIcons name='calendar' size={30} color={'#000000'} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cardWrapper}
                        onPress={() => { navigation.navigate('Notifications') }}
                    >
                        <Feather name='bell' size={28} color={'#000000'} />
                    </TouchableOpacity>
                </View>
            </View>}


            renderChild={Content({ navigation })} navigation={navigation} leftButton={false} paddingTop={false} paddingHorizontal={false}
        />
    )
}


const Content = ({ navigation }) => {

    const [
        defaultAnimationDialog, setDefaultAnimationDialog
    ] = useState(false);
    const [
        scaleAnimationDialog, setScaleAnimationDialog
    ] = useState(false);
    const [
        slideAnimationDialog, setSlideAnimationDialog
    ] = useState(false);




    const Data = [
        {
            id: 1, title: 'Birthday', msg: `It was @virat’s bday. we had a great day. The cake wasreally good . I hope the year ahead brings in a lot of happiness, prosperity, and good luck to him.`, time: '9:00 Am'
        },
        {
            id: 2, title: 'Birthday', msg: `It was @virat’s bday. we had a great day. The cake wasreally good . I hope the year ahead brings in a lot of happiness, prosperity, and good luck to him.`, time: '9:00 Am'
        },
        {
            id: 3, title: 'Birthday', msg: `It was @virat’s bday. we had a great day. The cake wasreally good . I hope the year ahead brings in a lot of happiness, prosperity, and good luck to him.`, time: '9:00 Am'
        },
        {
            id: 4, title: 'Birthday', msg: `It was @virat’s bday. we had a great day. The cake wasreally good . I hope the year ahead brings in a lot of happiness, prosperity, and good luck to him.`, time: '9:00 Am'
        },



    ]

    return (
        <View>
            <ScrollView style={styles.contentScroll} showsVerticalScrollIndicator={false}>
                {Data.map((item, index) =>

                    <View key={index} style={styles.postWrapper}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ backgroundColor: '#B6D4F6', width: '40%', textAlign: 'center', borderBottomRightRadius: 11, borderTopLeftRadius: 11, color: '#000000',textAlignVertical: 'center', fontFamily: 'Roboto', fontWeight: '400', fontSize: 14 }}>{item.title}</Text>
                            <View style={{ flexDirection: 'row', right: 12, paddingTop: 4 }}>
                                <Text style={{ color: '#000000', fontFamily: 'Roboto', fontWeight: '400', fontSize: 14 }}>{item.time}</Text>
                                <TouchableOpacity style={{ left: 5, }}>
                                    <MaterialIcons name='star' color={'yellow'} size={20} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ left: 5 }}>
                                    <Entypo name='dots-three-vertical' color={'#539BEF'} size={20} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Text style={{ textAlign: 'left', marginHorizontal: 5, fontFamily: 'Roboto', color: '#000000', fontWeight: '400', fontSize: 14 }}>{item.msg}</Text>


                        <View style={{ left: 10, top: 5 }}>
                            <Octicons name='heart' size={30} color={'red'} />
                        </View>

                    </View>

                )}


            </ScrollView>
            <View style={{ position: 'absolute', bottom: 0, alignSelf: 'flex-end' }}>
                <TouchableOpacity
                    onPress={() => setDefaultAnimationDialog(true)}

                    style={[styles.cardWrapper, { height: 52, width: 52, }]}>
                    <MaterialIcons name='edit' color={'#000000'} size={30} />

                </TouchableOpacity>


                {/* Post  */}
                <Dialog
                    onDismiss={() => {
                        setDefaultAnimationDialog(false);
                    }}
                    width={1}
                    height={.7}

                    onTouchOutside={() => {
                        setDefaultAnimationDialog(false)
                    }}
                    dialogAnimation={new SlideAnimation({
                        slideFrom: 'bottom',
                    })}
                    visible={defaultAnimationDialog}
                >
                    <DialogContent
                        style={{
                            backgroundColor: '#fff',
                            height: '90%'
                        }}>

                        <Text style={{ width: '100%', color: '#539BEF', fontWeight: '600', fontSize: 20, fontFamily: 'Roboto', textAlign: 'right', marginTop: 20 }}>Post</Text>
                        <ScrollView>
                            <TextInput
                                multiline={true}
                                style={styles.Input}
                                underlineColorAndroid="transparent"
                                placeholder="Write Something Here"
                                placeholderTextColor={"#aaaaaa"}
                            >

                            </TextInput>

                        </ScrollView>
                        <View style={{ position: 'absolute', bottom: 0, alignSelf: 'flex-end', flexDirection: 'row', backgroundColor: 'rgba(83, 155, 239, 0.16);', paddingHorizontal: 25, borderTopLeftRadius: 20, borderBottomLeftRadius: 20, paddingVertical: 10 }}>
                            <TouchableOpacity style={styles.icons}>
                                <MaterialIcons name='text-format' color={'#000000'} size={30} />

                            </TouchableOpacity>
                            <TouchableOpacity style={styles.icons}>
                                <MaterialIcons name='image' color={'#000000'} size={30} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.icons}>
                                <MaterialIcons name='camera' color={'#000000'} size={30} />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.icons}>
                                <MaterialIcons name='mic' color={'#000000'} size={30} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.icons}>
                                <Octicons name='file-directory' color={'#000000'} size={30} />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.icons}>
                                <MaterialIcons name='edit' color={'#000000'} size={30} />
                            </TouchableOpacity>


                        </View>

                    </DialogContent>
                </Dialog>

                {/* post */}
            </View>




        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    contentScroll: {
        display: 'flex',
        height: '100%',
        width: '100%',
        position: 'relative',
        paddingTop: 10,
        backgroundColor: '#fff'
    },
    wlcm: {
        color: '#fff',
        marginTop: 50,
        fontSize: 14,
        fontWeight: '600',
        fontFamily: 'SF Pro Text',
        left: 15
    },
    wlcmname: {
        color: '#fff',

        fontSize: 18,
        fontWeight: '600',
        fontFamily: 'SF Pro Text',
        left: 22
    },
    srch: {
        left: 20,
        flexDirection: 'row',
        marginTop: 10

    },
    searchbox: {
        flexDirection: 'row',
        backgroundColor: '#18181C',
        height: 48,
        width: 316,
        borderRadius: 8,
        right: 12,
        // left: 10

    },
    filter: {
        backgroundColor: "#18181C",
        height: 48,
        width: 50,
        borderRadius: 8,
        left: 0
    },
    linearGradient: {
        marginTop: 20,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 8
    },
    coinWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#18181c',
        padding: 2,
        paddingHorizontal: 5,
        borderRadius: 10,
        marginVertical: 5
    },
    cardWrapper: {
        alignSelf: "center",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 0,
        // left: 7,
        width: 32,
        height: 32,
        marginBottom: 15,
        margin: 8,
        // padding: 12,
        backgroundColor: '#fff',
        borderRadius: 80,
        borderColor: '#fcfcfc',
        elevation: 3,
        shadowColor: '#000',
        // for ios below 
        // shadowOffset: { width: 5, height: 5 }
    },
    Input: {
        marginVertical: 10,
        justifyContent: "flex-start",
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        borderRadius: 8,
        color: '#000',
        width: '100%',
        top: 0,
        paddingBottom: 100

    },
    postWrapper: {
        marginTop: 50,
        marginLeft: 18,
        // marginRight: 50,
        paddingBottom: 20,
        width: '95%',
        justifyContent: 'center',
        alignSelf: "center",
        backgroundColor: '#fff',
        borderRadius: 11,
        borderColor: '#fcfcfc',
        elevation: 3,
        shadowColor: '#000',
    },
    icons: {
        marginHorizontal: 10
    },

})