import React from 'react'
import { Provider } from 'react-redux'

import MainStackNavigator from './src/Screens/MainStackNavigator'
import Store from './src/Common/Store'

export default function App() {
  return(
    <Provider store={Store}>
      <MainStackNavigator />
    </Provider>
  )
}