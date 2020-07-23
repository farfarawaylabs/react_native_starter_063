import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import LoginScreen from 'screens/LoginScreen/LoginScreen'

const Stack = createStackNavigator()

/** The stack of screens related to auth (login/signup/etc) */
const AppIntroStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  )
}

export default AppIntroStack
