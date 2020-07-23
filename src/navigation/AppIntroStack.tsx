import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import AppIntroScreen from 'screens/AppIntroScreen/AppIntroScreen'

const Stack = createStackNavigator()

const AppIntroStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="AppIntro" component={AppIntroScreen} />
    </Stack.Navigator>
  )
}

export default AppIntroStack
