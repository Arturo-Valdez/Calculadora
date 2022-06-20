import React from 'react'
import { AppState, SafeAreaView, StatusBar } from 'react-native';
import CalculadoraScreen from './src/Screens/CalculadoraScreen';
//import { View, Text } from 'react-native';
import { styles } from './src/Theme/AppTheme';

const App = () => {
  return (
    
    <SafeAreaView style={styles.fondo}>
      <StatusBar backgroundColor='black' barStyle='light-content'/>

      <CalculadoraScreen/>
    </SafeAreaView>
  )
}

export default App