import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PrivateRoutes } from './routes/private'
import { NavigationContainer } from '@react-navigation/native'

const Routes = () => {
    return (
        <NavigationContainer>
            <PrivateRoutes />
        </NavigationContainer>
    )
}

export default Routes

const styles = StyleSheet.create({})