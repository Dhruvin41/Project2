
import React from 'react';
import { Text } from 'react-native';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WinScreen from './WinScreen';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <>
     
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Screen1} />
          <Stack.Screen name="Level" component={Screen2} />
          <Stack.Screen name="Game" component={Screen3} />
          <Stack.Screen name="Result" component={WinScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}
export default App;
  