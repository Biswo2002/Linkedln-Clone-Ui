import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet } from 'react-native'
import React from 'react'
import { PrivateRoutesType } from '../../types/AllRoutes'
import Login from '../../screen/private/Login'
import SignUp from '../../screen/private/SignUp'

const PrivateRoutes = () => {
  const Stack = createNativeStackNavigator<PrivateRoutesType>();
  return (
    <Stack.Navigator initialRouteName='Login' screenOptions={{
      headerShown: false
    }}  >
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='SignUp' component={SignUp} />
    </Stack.Navigator>
  )
}

export default PrivateRoutes

const styles = StyleSheet.create({})