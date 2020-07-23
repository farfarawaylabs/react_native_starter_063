import React from 'react'
import {Provider} from 'react-redux'
import {Appearance} from 'react-native'
import {ThemeProvider} from 'react-native-elements'
import useStore from 'hooks/useStore'
import lightTheme from 'resources/themes/light'
import darkTheme from 'resources/themes/dark'
import App from './App'

// TODO: If you want to use just one theme instead of supporting dark and light, edit it here
// Load the correct theme based on the phone setting
const colorScheme = Appearance.getColorScheme()
const theme = colorScheme === 'light' ? lightTheme : darkTheme

/** Container to inject redux and theme into the app */
const AppContainer = () => {
  // Load the persisted store or the initial one
  const store = useStore()

  // Wait until the store is loaded before showing the app
  if (store === null) {
    return null
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  )
}

export default AppContainer
