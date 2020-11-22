import 'react-native-gesture-handler';

import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './contexts/auth'

import Routes from './routes'

const App: React.FC = () => {

return(
  <NavigationContainer>
    <AuthProvider>  
      <Routes />   
    </AuthProvider>
 </NavigationContainer>
    
  )
 
}

export default App