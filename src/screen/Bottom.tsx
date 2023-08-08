import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home1 from './Home1';
import Icon from 'react-native-vector-icons/FontAwesome';

import {useState} from 'react';
import Details from './details';
import Homestack from './Homestack';
import ProfileUI from '../assets/ProfileUI';
import APIs from '../assets/APIs';
import booking from '../assets/booking';
import Booking from '../assets/booking';

const Tab = createBottomTabNavigator();
const SettingsStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countText: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

// const handleIncrementDecrement = ({action, count, setCount}: any) => {
//   if (action === 'increment') {
//     setCount(count + 1);
//   } else if (action === 'decrement') {
//     setCount(count - 1);
//   }
// };

export default function Bottom() {
  // const [count, setCount] = useState(0);
  // const [istrue, setIstrue] = useState(true);

  return (
    // <NavigationContainer independent={true}>
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          console.log('route name', route);

          if (route.name === 'Home') {
            return (
              <Icon
                name="home"
                size={30}
                color={focused ? '#05c6a1' : 'black'}
              />
            );
          } else if (route.name === 'booking') {
            return (
              <Icon
                name="bookmark"
                size={30}
                color={focused ? '#05c6a1' : 'black'}
              />
            );
          } else if (route.name === 'Watchlist') {
            return (
              <Icon
                name="heart"
                size={30}
                color={focused ? '#05c6a1' : 'black'}
              />
            );
          } else {
            return (
              <Icon
                name="user"
                size={30}
                color={focused ? '#05c6a1' : 'black'}
              />
            );
          }
        },
        tabBarActiveTintColor: '#05c6a1',
        tabBarInactiveTintColor: 'black',
      })}>
      <Tab.Screen
        name="Home"
        component={Homestack}
        options={{headerShown: true}}
      />
      <Tab.Screen
        name="booking"
        component={BookingScreen}
        options={{headerShown: true}}
      />
      <Tab.Screen
        name="Watchlist"
        component={WatchlistScreen}
        options={{headerShown: true}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: true}}
      />
    </Tab.Navigator>
    // </NavigationContainer>
  );
}

function BookingScreen() {
  // const [count, setCount] = useState(0);

  // const handleIncrementDecrement = ({action}: any) => {
  //   if (action === 'increment') {
  //     setCount(count + 1);
  //   } else if (action === 'decrement') {
  //     setCount(count - 1);
  //   }
  // };

  return (
    <Booking />
    // <View style={styles.container}>
    //   <Text style={styles.countText}>Count: {count}</Text>
    //   <View style={styles.buttonContainer}>
    //     <TouchableOpacity
    //       style={styles.button}
    //       onPress={() => handleIncrementDecrement('increment')}>
    //       <Text style={styles.buttonText}>Increment</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity
    //       style={styles.button}
    //       onPress={() => handleIncrementDecrement('decrement')}>
    //       <Text style={styles.buttonText}>Decrement</Text>
    //     </TouchableOpacity>
    //   </View>
    // </View>
  );
}

function WatchlistScreen() {
  return <APIs />;
}

function ProfileScreen() {
  return <ProfileUI />;
}
