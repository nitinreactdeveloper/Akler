import React, { useState, useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, TextInput, ScrollView, Image } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5'
import Button from '../../components/Button'
import Input from '../../components/Input'
import BaseScreen from '../../components/Basescreen'
import Loader from '../../components/Loader'
import { AuthContext } from '../../navigation/AuthProvider'

const themeColor =
    '#f33'

const MobileLogin = ({ navigation }) => {

    return (
        <BaseScreen title={''} renderChild={Content({ navigation })}
            navigation={navigation} />
    )
}

const Content = ({ navigation }) => {

    const { fetching, register } = useContext(AuthContext)

    const [email, setEmail] = useState()
    const [name, setName] = useState()
    const [mobile, setmobile] = useState()
    const [password, setPassword] = useState()
    const [securePwd, setsecurePwd] = useState(true)
    const [errors, setErrors] = useState({})
    const [isSelected, setIsSelected] = useState(false)

    const validate = () => {
        const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
        let errors = {}

        if (!mobile) {
            errors.mobile = "Mobile is required"
            setErrors(errors)
            return false
        }
        else if (!/^[0]?[789]\d{9}$/.test(mobile)) {
            errors.mobile = 'Invalid mobile no';
            setErrors(errors)
            return false
        }
        else {
            setErrors({})
            return true
        }
    }

    const handleSubmit = () => {
        let isValid = validate()
        if (isValid === true) {
            // register(name, email, mobile, password, navigation)

            // register(name,email, password,  mobile,  navigation)
            navigation.navigate('Otp')

        }
    }


    return (
        <ScrollView style={styles.contentScroll} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'always'}>

            <View style={{ display: 'flex', justifyContent: 'center', alignSelf: 'center', marginVertical: 10, marginBottom: 25 }}>
                <Text style={{
                    fontSize: 24, color: '#000', fontWeight: '600', alignSelf: 'center', marginBottom: 3,
                    fontFamily: "Roboto",
                }}>Verify Mobile NO. </Text>
                <Text style={{
                    fontSize: 16, color: '#857C7C', fontWeight: '400', alignSelf: 'center',
                    fontFamily: "Roboto", marginBottom: 30
                }}>We recommended to verify your mobile no</Text>
            </View>

           

            
            <Input
                name="mobile" value={mobile} placeholder='Mobile No' keyboardType='phone-pad'
                error={errors.mobile ? true : false}
                onChangeText={setmobile}>
            </Input>
            {errors.mobile ?
                <Text style={{ color: themeColor, marginBottom: 10, marginTop: -15 }}>{errors.mobile}</Text>
                : null
            }
           
           

           
          
            <Button title='Send Otp' onPress={() => {
                handleSubmit()
                
            }} />

          
        </ScrollView>
    )
}

export default MobileLogin

const styles = StyleSheet.create({
    rowAlign: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },
    label: {
        color: '#fff',
        fontSize: 16,
        marginVertical: 10,
        fontFamily: "Roboto-Regular",
    },
    whiteTxt: {
        color: '#fff',
        fontSize: 18,
        marginVertical: 10,
        fontFamily: "PTSans-Regular",
    },
    contentScroll: {
        display: 'flex',
        height: '100%',
        width: '100%',
        // borderWidth: 1, borderColor: '#fff'
    },
    btnRow: {
        marginVertical: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    socialBtn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '45%',
        height: 40,
        borderRadius: 25,
        backgroundColor: '#4267B2',
    },
    solidBtn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 40,
        marginVertical: 15,
        borderRadius: 10,
        backgroundColor: '#f33',
    },
    solidBtnTxt: {
        fontSize: 16,
        color: '#F5CF04',
        fontWeight: '600',
        fontFamily: "PTSans-Bold",
    },
    solidBtnTxt2: {
        fontSize: 16,
        color: '#fff',
        fontFamily: "Roboto-Regular",
    },
    inputLabel: {
        color: '#35aecb',
        fontSize: 20,
        fontWeight: '600',
        alignSelf: 'flex-start',
        marginLeft: 15,
        marginBottom: 10,
    },
    whiteBtn: {
        backgroundColor: 'transparent',
        marginTop: 0,
        color: "#F5CF04"
    },
    checkboxContainer: {
        flexDirection: "row", alignItems: 'center',
        marginLeft: 10,
        // borderWidth: 1,
    },
    checkbox: {
        alignSelf: "center",
        display: 'flex',
        justifyContent: 'center', alignItems: 'center',
        backgroundColor: '#fff',
        width: 25,
        height: 25,
        marginRight: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#18C5FC'
    },

    forgotBtnWrapper: {
        alignSelf: 'flex-end',
        // marginBottom: 25, marginTop: 10,
    },
    forgotBtn: {
        fontSize: 16,
        fontWeight: '600',
        color: '#f00'
    },

})
