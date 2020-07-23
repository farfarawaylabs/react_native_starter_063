import React from 'react'
import {connect} from 'react-redux'
import {RootState} from 'state/reducers/rootReducer'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import AppIntroStack from './AppIntroStack'
import AuthStack from './AuthStack'
import MainStack from './MainStack'
import UserInterface from 'models/User'

const AppStack = createStackNavigator()

/** The app main navigation container */
const AppNavigationContainer = (props: {user: UserInterface | null}) => {
  const getDefaultStackToShow = () => {
    // TODO: Decide here what stack to show
    // If the user logged in already, show the main stack otherwise show the intro screen
    if (props.user === null) {
      return 'Intro'
    } else {
      return 'Main'
    }
  }

  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
        initialRouteName={getDefaultStackToShow()}>
        <AppStack.Screen name="Intro" component={AppIntroStack} />
        <AppStack.Screen name="Auth" component={AuthStack} />
        <AppStack.Screen name="Main" component={MainStack} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

const mapStateToProps = (state: RootState) => {
  return {
    user: state.user.user,
  }
}

export default connect(mapStateToProps)(AppNavigationContainer)
