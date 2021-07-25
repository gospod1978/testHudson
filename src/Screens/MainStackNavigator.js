import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from './LoginScreen'
import Home from './HomeScreen'

const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{
          gestureEnabled: true,
          headerStyle: {
            backgroundColor: '#101010'
          },
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerTintColor: '#ffd700',
          headerBackTitleVisible: false
        }}
        headerMode='float'>
        <Stack.Screen
          name='Login'
          component={Login}
          options={{ title: 'Login Screen' }}
        />
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ title: 'Home Screen' }}
        />
        {/* <Stack.Screen
          name='Settings'
          component={Settings}
          options={{ title: 'Settings' }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator