import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ToDoScreen from './pages/ToDoScreen';
import BuscaCep from './pages/BuscaCep';

const Stack = createNativeStackNavigator();

export default function App() {
  return <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component = {ToDoScreen}
    />
    <Stack.Screen 
      name = "Busca CEP" 
      component = {BuscaCep} />
  </Stack.Navigator>
</NavigationContainer>
}