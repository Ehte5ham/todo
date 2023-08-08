import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Button,
  TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Article = ({navigation}: any) => {
  //   const [count, setcount] = useState(0);
  //   const [data, setdata] = useState('');

  //   useEffect(() => {
  //     console.log('UseEffect', count);
  //     if (count > 25) {
  //       setdata('You Exceeded Age limit');
  //     } else {
  //       setdata('');
  //     }
  //   }, [count]); // Specify the dependency array to avoid unnecessary re-renders.

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('email');
      await AsyncStorage.removeItem('password');
      Alert.alert('Success', 'Logged out successfully!');
      console.log('clear');
      navigation.navigate('Login');
    } catch (error) {
      // Handle any potential errors here
      console.log(error);
      Alert.alert('Error', 'Failed to log out. Please try again.');
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/* <Text style={{fontSize: 30}}>{count}</Text>
      <Text>{data}</Text>
      <Button title="Increment" onPress={() => setcount(count + 1)} />
      <Button title="Decrement" onPress={() => setcount(count - 1)} /> */}
      <View></View>
      <TextInput></TextInput>
      <View>
        <TouchableOpacity
          onPress={handleLogout}
          style={{
            flex: 0.2,
            backgroundColor: '#8791F8',
            width: 90,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Log Out
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Article;

const styles = StyleSheet.create({});
