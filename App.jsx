import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainNavigation from './navigation/MainNavigation'


const App = () => {
  return (
      <NavigationContainer>
         <MainNavigation></MainNavigation>
      </NavigationContainer>
  )
}

export default App
