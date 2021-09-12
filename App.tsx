
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import loginE from './src/pages/loginE'
import loginT from './src/pages/loginT'
import initial from './src/pages/initial'
import search from './src/pages/search'
import orders from './src/pages/orders'
import account from './src/pages/account'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import EStyleSheet from 'react-native-extended-stylesheet'
EStyleSheet.build()

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()

function HomeTabs() {
  return(
    <Tab.Navigator>
      <Tab.Screen options={{ headerShown: false }} name="Início" component={initial} />
      <Tab.Screen options={{ headerShown: false }} name="Buscar" component={search} />
      <Tab.Screen options={{ headerShown: false }} name="Pedidos" component={orders} />
      <Tab.Screen options={{ headerShown: false }} name="Conta" component={account} />
    </Tab.Navigator>
  )

}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="loginT" component={loginT} />
        <Stack.Screen options={{ headerShown: false }} name="loginE" component={loginE} />
        <Stack.Screen options={{ headerShown: false }} name="initial" component={HomeTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;