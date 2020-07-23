import React from 'react'
import useSplashScreen from 'hooks/useSplashScreen'
import {enableScreens} from 'react-native-screens'
import {
  Billboard,
  NOTIFICATIONS_POSITION,
} from '@farfarawaylabs/react-native-beautiful-notifications'
import AppNavigationContainer from 'navigation/AppNavigationContainer'

declare const global: {HermesInternal: null | {}}
enableScreens()

const App = () => {
  /** Hides the Splash screen on app load */
  useSplashScreen(true)

  return (
    <>
      <AppNavigationContainer />
      <Billboard position={NOTIFICATIONS_POSITION.TOP} />
    </>
  )
}

export default App
