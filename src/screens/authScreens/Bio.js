import React, { useState, useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, SafeAreaView, View, TextInput, ScrollView, Image } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5'
import Button from '../../components/Button'
import Input from '../../components/Input'
import BaseScreen from '../../components/Basescreen'
import Loader from '../../components/Loader'
import { AuthContext } from '../../navigation/AuthProvider'
import ImagePicker from 'react-native-image-crop-picker';
import Dialog from "react-native-dialog";
import { loadPartialConfigAsync } from '@babel/core'
const themeColor =
  '#f33'

const Bio = ({ navigation }) => {

  return (
    <BaseScreen title={''} renderChild={Content({ navigation })}
      navigation={navigation} />
  )
}

const Content = ({ navigation }) => {

  const { fetching, register, login } = useContext(AuthContext)
  // const [uri, setUri] = React.useState(props.source?.uri || undefined);

  const [photo, setPhoto] = useState()
  const [imgName, setImgName] = useState()
  const [mime, setMime] = useState()
  const [visible, setVisible] = useState(false);

  const showDialog = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleDelete = () => {
    // The user has pressed the "Delete" button, so here you can do your own logic.
    // ...Your logic
    setVisible(false);
  };



  const pickPicture = () => {
    ImagePicker.openCamera({
      // width: 300,
      // height: 400,
      compressImageMaxWidth: 400,
      compressImageMaxHeight: 400,
      compressImageQuality: 0.99,
      cropping: true
    }).then(image => {
      console.log(image)
      const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path
      // const cleanUrl = imageUri.replace("file://", "")
      setPhoto(imageUri)
      setMime(image.mime)
      const fname = imageUri.split('/').pop()
      setImgName(fname)
    });
  };





  return (
    <View style={styles.contentScroll} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'always'}>


      <TouchableOpacity style={styles.imgWrapper} onPress={() => pickPicture()}>

        <Image source={{ uri: photo }} style={styles.profileImg}></Image>

        
      </TouchableOpacity>
      <Text style={styles.label}>User Name</Text>






      <View>
        <Button title='Skip ' onPress={() => {
          login()
        }} />
      </View>


    </View>

  );
};



export default Bio

const styles = StyleSheet.create({
  rowAlign: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  label: {
    color: '#000',
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
  imgWrapper: {
    alignSelf: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    borderWidth: 1,
    borderColor: '#222',
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20
  },
  profileImg: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },

})
