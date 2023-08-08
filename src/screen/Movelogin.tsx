import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Movelogin1 = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.Container1}>
          <Text style={{fontSize: 40, fontWeight: 'bold'}}>Welcome</Text>
          <Text style={{fontSize: 20}}>Sign into your Account</Text>
        </View>
        <View style={styles.Container2}>
          <View style={styles.inputContainer}>
            <TextInput placeholder="Username" style={styles.Input} />
          </View>
          <View style={styles.inputContainer}>
            <TextInput placeholder="Password" style={styles.Input} />
          </View>
          <View style={{paddingTop: 18}}>
            <TouchableOpacity style={styles.login}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontSize: 17,
                  fontWeight: 'bold',
                }}>
                LOGIN
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{paddingTop: 50}}>
            <Text style={{fontSize: 15}}>
              Don,t have an account?
              <TouchableOpacity
                onPress={() => navigation.navigate('MoveSignup')}>
                <Text style={{fontWeight: 'bold', color: '#05c6a1'}}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
        <View style={styles.Container3}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Movelogin1;

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  Container1: {
    flex: 0.4,

    justifyContent: 'center',
    paddingLeft: width * 0.1,
  },
  Container2: {
    flex: 0.3,

    paddingHorizontal: width * 0.1,
    paddingVertical: width * 0.1,
  },
  Container3: {
    flex: 0.4,
  },
  inputContainer: {
    paddingVertical: 10,
  },
  Input: {
    borderWidth: 1,
    borderColor: '#707070',
    padding: 10,
    borderRadius: 10,
  },
  login: {
    backgroundColor: '#05c6a1',

    padding: 10,
    borderRadius: 10,
    paddingVertical: 15,
  },
});
