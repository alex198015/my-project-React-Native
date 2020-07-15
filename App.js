import 'react-native-gesture-handler'
import React from 'react';
import { RootStack } from './src/navigation/AppNavigation';
import { StyleSheet, View } from 'react-native';
import {Provider} from 'react-redux'
import store from "./src/store/index"


export default function App() {


  return (
    <Provider store={store}>
      <View style={styles.wrapper}>
      <RootStack />
      </View>
    </Provider>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex:1,
  }
})