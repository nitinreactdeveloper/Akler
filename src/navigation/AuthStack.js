import React, { useEffect, useContext } from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AuthContext } from './AuthProvider';

import OnboardingScreen from '../screens/authScreens/OnboardingScreen';
import Login from '../screens/authScreens/Login';
import Welcome from '../screens/authScreens/Welcome';
import Register from '../screens/authScreens/Register';
import Forgot from '../screens/authScreens/Forgot';
import Otp from '../screens/authScreens/Otp';
import Signup from '../screens/authScreens/Signup';
import MobileLogin from '../screens/authScreens/mobilelogin';
import Account from '../screens/authScreens/Account';
import Bio from '../screens/authScreens/Bio';

const Stack = createNativeStackNavigator()

const AuthStack = () => {

    const { isFirstLaunch, setIsFirstLaunch, } = useContext(AuthContext)

    return (
        <Stack.Navigator initialRouteName={isFirstLaunch ? 'Login' : 'Login'}>
            <Stack.Screen name="OnBoarding" component={OnboardingScreen} options={{ headerShown: false, }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false, }} />
            <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false, }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false, }} />
            <Stack.Screen name="Forgot" component={Forgot} options={{ headerShown: false, }} />
            <Stack.Screen name="Otp" component={Otp} options={{ headerShown: false, }} />
            <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false, }} />
            <Stack.Screen name="MobileLogin" component={MobileLogin} options={{ headerShown: false, }} />
            <Stack.Screen name="Account" component={Account} options={{ headerShown: false, }} />
            <Stack.Screen name="Bio" component={Bio} options={{ headerShown: false, }} />
        </Stack.Navigator>
    )
}

export default AuthStack
