import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import HomeScreen from './src/screens/Home'

const App = () => {
  return (
    <View>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})