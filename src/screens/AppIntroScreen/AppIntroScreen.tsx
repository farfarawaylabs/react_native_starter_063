import React from 'react'
import {StackScreenProps} from '@react-navigation/stack'
import {View, Text} from 'react-native'
import {
  CoverScreenOne,
  CoverScreenOneButton,
  CoverScreenOneDescription,
  CoverScreenOneTitle,
} from '@farfarawaylabs/react-native-beautiful-screens'

// TODO: Change to your own background image
const demoBgImage = require('resources/images/demoBG.jpg')

const AppIntroScreen = ({navigation}: StackScreenProps<{}>) => {
  return (
    <CoverScreenOne image={demoBgImage}>
      <CoverScreenOneTitle title="Welcome to the amazing app" />
      <CoverScreenOneDescription description="Create amazing things using this app. You never seen this before" />
      <CoverScreenOneButton
        title="Take me in"
        onPress={() => {
          // TODO: Decide if the user should go to the auth stack or stairght into the app (for apps that does not require login)
          navigation.navigate('Main')
        }}
      />
    </CoverScreenOne>
  )
}

export default AppIntroScreen
