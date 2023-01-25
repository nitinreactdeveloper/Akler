import React, { useEffect, useState, useContext } from 'react'
import { View, Text, Image, Dimensions, StyleSheet, AppState } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5'
import SimpleLineIcons from 'react-native-vector-icons/dist/SimpleLineIcons'
import Mention from '../screens/appScreens/Mention';
import Profile from '../screens/appScreens/Profile';
import { AuthContext } from './AuthProvider';
import Notifications from '../screens/appScreens/Notifications';
import HomeScreen from '../screens/appScreens/HomeScreen';
import DrawerContent from '../components/DrawerContent';
import Message from '../screens/appScreens/Message';
import Chat from '../screens/appScreens/chat';
import Comments from '../screens/appScreens/Comments';
import ChangePassword from '../screens/authScreens/ChangePassword';
import Octicons from 'react-native-vector-icons/dist/Octicons';
const { width, height } = Dimensions.get('window')

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const activeTabColor =
    '#539BEF'
const nonActiveTabColor =
    '#C4C4C4'
const backgroundTabColor =
    '#fff'

const AppStack = () => {

    const { userToken, userDetails } = useContext(AuthContext)

    return (
        <Stack.Navigator initialRouteName={"Bottomtab"} >
            <Stack.Screen
                name="Bottomtab"
                component={BottomTabNav}
                options={{
                    headerShown: false,
                }}>
            </Stack.Screen>
            <Stack.Screen name='Chat' component={Chat} options={({ route }) => ({
                title: route.params.username,
                headerTitleAlign: 'center'
            })} />
            <Stack.Screen name='Notifications' component={Notifications} options={{
                headerShown: false
            }} />
            <Stack.Screen name='Comments' component={Comments} options={{
                headerShown: false
            }} />

        </Stack.Navigator>
    )
}

export default AppStack

const DrawerNavigator = ({ navigation }) => (
    <Drawer.Navigator initialRouteName="Home"
        drawerContent={props => <DrawerContent{...props} />}
    >
        <Drawer.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
    </Drawer.Navigator>
)

const BottomTabNav = ({ navigation }) => (
    <Tab.Navigator initialRouteName="Home"
        screenOptions={{
            keyboardHidesTabBar: true,
            showLabel: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                // position: 'absolute',
                // elevation: 5,
                backgroundColor: backgroundTabColor,
                borderTopWidth: 1,
                borderTopColor: "#f9f9f9",
                height: 60,
            }
        }}>
        <Tab.Screen name="Home" component={HomeScreen}
            options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    return (
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <MaterialCommunityIcons name="note-edit-outline" size={25}
                                color={focused ? activeTabColor : nonActiveTabColor}
                            ></MaterialCommunityIcons>
                            {focused ?
                                <View style={{
                                    borderBottomWidth: 2,
                                    borderColor: focused ? activeTabColor : nonActiveTabColor,

                                }}>
                                    <Text style={{
                                        color: focused ? activeTabColor : nonActiveTabColor,
                                        fontSize: 12, marginBottom: 5

                                    }}>Diary Entry</Text>
                                </View>
                                : null}
                        </View>
                    )
                },
            }} />
        <Tab.Screen name="Mention" component={Mention}
            options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    return (
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Octicons name="mention" size={25}
                                color={focused ? activeTabColor : nonActiveTabColor}
                            ></Octicons>
                            {focused ?
                                <View style={{
                                    borderBottomWidth: 2,
                                    borderColor: focused ? activeTabColor : nonActiveTabColor,

                                }}>
                                    <Text style={{
                                        color: focused ? activeTabColor : nonActiveTabColor,
                                        fontSize: 12, marginBottom: 5

                                    }}>Mention</Text>
                                </View>

                                : null}
                        </View>
                    )
                },
            }} />
        <Tab.Screen name="Message" component={Message}
            options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    return (
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <MaterialCommunityIcons name="message-processing-outline" size={25}
                                color={focused ? activeTabColor : nonActiveTabColor}
                            ></MaterialCommunityIcons>
                            {focused ?
                                <View style={{
                                    borderBottomWidth: 2,
                                    borderColor: focused ? activeTabColor : nonActiveTabColor,

                                }}>
                                    <Text style={{
                                        color: focused ? activeTabColor : nonActiveTabColor,
                                        fontSize: 12, marginBottom: 5

                                    }}>Message</Text>
                                </View>

                                : null}
                        </View>
                    )
                },
            }} />
        <Tab.Screen name="Profile" component={Profile}
            options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    return (
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <MaterialIcons name="person" size={25}
                                color={focused ? activeTabColor : nonActiveTabColor}
                            ></MaterialIcons>
                            {focused ?
                                <View style={{
                                    borderBottomWidth: 2,
                                    borderColor: focused ? activeTabColor : nonActiveTabColor,

                                }}>
                                    <Text style={{
                                        color: focused ? activeTabColor : nonActiveTabColor,
                                        fontSize: 12, marginBottom: 5

                                    }}>Profile</Text>
                                </View>

                                : null}
                        </View>
                    )
                },
            }} />
    </Tab.Navigator>
)


const styles = StyleSheet.create({})