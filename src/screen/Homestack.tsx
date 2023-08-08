import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home1 from './Home1';
import Details from './details';
import Movelogin1 from './Movelogin';
import Password from './password';

const Stack = createNativeStackNavigator();

const Homestack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home1"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home1" component={Home1} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Movelogin" component={Movelogin1} />
      <Stack.Screen name="Password" component={Password} />
    </Stack.Navigator>
  );
};

export default Homestack;

const styles = StyleSheet.create({});
