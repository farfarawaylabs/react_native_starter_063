import React, {useEffect} from 'react'
import {Image, Button, StyleSheet} from 'react-native'
import {StackScreenProps} from '@react-navigation/stack'
import {useDispatch} from 'react-redux'
import {updateDidSeeWalkthrough} from 'state/slices/userSlice'
import {IntroScreen} from '@farfarawaylabs/react-native-beautiful-screens'
import {Center} from '@farfarawaylabs/react-native-layout'

const demoImage = require('resources/images/introDemoOne.png')

const AppWalkthroughScreen = ({navigation}: StackScreenProps<{}>) => {
  const dispatch = useDispatch()

  /** TODO: Remove this if you want to mark the fact that the user seen the walkthrough just
   * after the user actually navigates the all walkthrough */
  /** Mark that the user seen the walkthrough scree */
  useEffect(() => {
    dispatch(updateDidSeeWalkthrough({value: true}))
  }, [dispatch])

  return (
    // TODO: Update to your own app walkthough screens
    <IntroScreen.Screen
      dotColor="#ffb367"
      activeDotColor="#58b4ae"
      onDone={() => navigation.navigate('Home')}>
      <IntroScreen.Slide>
        <IntroScreen.ImageSection>
          <Image source={demoImage} style={styles.image} />
        </IntroScreen.ImageSection>
        <IntroScreen.TitleSection>
          <IntroScreen.Title title="Welcome to the amazing app" />
          <IntroScreen.Subtitle subtitle="You won't believe how cool this app and how much you will love it" />
        </IntroScreen.TitleSection>
        <IntroScreen.AdditionalContentSection>
          <Center horizontal vertical style={styles.buttonContainer}>
            <Button title="Enable Notifications" onPress={() => {}} />
          </Center>
        </IntroScreen.AdditionalContentSection>
      </IntroScreen.Slide>

      <IntroScreen.Slide backgroundColor="#ffe2bc">
        <IntroScreen.ImageSection>
          <Image source={demoImage} style={styles.image} />
        </IntroScreen.ImageSection>
        <IntroScreen.TitleSection>
          <IntroScreen.Title title="Amazing Feature" />
          <IntroScreen.Subtitle subtitle="This is another amazing feature" />
        </IntroScreen.TitleSection>
      </IntroScreen.Slide>
    </IntroScreen.Screen>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '80%',
    height: '100%',
  },
  buttonContainer: {
    width: '100%',
  },
})

export default AppWalkthroughScreen
