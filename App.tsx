import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'
import { StyleSheet } from 'react-native'
import React from 'react'
import { CustomTheme } from './src/styles'
import Routes from './src/Routes'

const App = () => {
  return (
    // <NavigationContainer>
    <NativeBaseProvider theme={CustomTheme as any} >
      <Routes />
    </NativeBaseProvider>  
  )
}

export default App

const styles = StyleSheet.create({})