import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [checkvalidEmail, setcheckvalidEmail] = useState(false);
  const [password, setPassword] = useState('');
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const clearStorage = async () => {
    try {
      await AsyncStorage.clear();
      setEmail('');
      setPassword('');
      console.log('Storage successfully cleared!');
    } catch (e) {
      Alert.alert('Failed to clear the async storage.');
    }
  };

  const saveData = async (uid: string) => {
    try {
      await AsyncStorage.setItem('uid', uid);
      // await AsyncStorage.setItem('password', password);
      console.log('Data successfully saved');
    } catch (e) {
      Alert.alert('Failed to save the data to the storage');
    }
  };

  const readData = async () => {
    try {
      const storedUid = await AsyncStorage.getItem('uid');

      if (storedUid) {
        navigation.navigate('Home');
      } else {
        return;
      }
    } catch (e) {
      Alert.alert('Failed to fetch the input from storage');
    }
  };

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      console.log('User:', user);
      if (!user) {
        navigation.navigate('Home');
      } else {
        readData(); // Load stored email and password (if any) if the user is not already authenticated
      }
    });

    return () => unsubscribe(); // Clean up the subscription when component unmounts
  }, [navigation]);

  const handleLogin = async () => {
    try {
      // await saveData();
      await loginsignin();
    } catch (error) {
      // Handle any potential errors here
      console.log(error);
      Alert.alert('Error');
    }
  };

  const handleEmailFocus = () => {
    setIsEmailFocused(true);
    setIsPasswordFocused(false);
  };

  const handlePasswordFocus = () => {
    setIsEmailFocused(false);
    setIsPasswordFocused(true);
  };

  const handlecheckEmail = (text: any) => {
    let regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    setEmail(text);
    if (regex.test(text)) {
      setcheckvalidEmail(false);
    } else {
      setcheckvalidEmail(true);
    }
  };

  const loginsignin = async () => {
    try {
      const isuserlogin = await auth()
        .signInWithEmailAndPassword(email, password)
        .then(res => console.log('response', res));
      console.log(isuserlogin);
      console.log('email', email);
      console.log('password', password);
      Alert.alert('Welcome');
      navigation.navigate('Home');
    } catch (error) {
      // Handle any potential errors here
      console.log(error);
      Alert.alert('Error');
    }
  };

  return (
    <View style={styles.maincontainer}>
      <View style={styles.container1}>
        <Text style={{fontSize: 50, fontWeight: 'bold', color: 'black'}}>
          Login
        </Text>
        <Text style={{fontSize: 20, color: '#eab676'}}>
          Please sign in to continue
        </Text>
      </View>
      <View style={styles.container2}>
        <TextInput
          style={[
            styles.childcontainer2,
            {
              borderBottomWidth: 2,
              marginVertical: 40,
              borderBottomColor: isEmailFocused ? 'transparent' : '#A0A0A0',
              shadowColor: isEmailFocused ? '#808080' : 'transparent',
              shadowOffset: {width: 0, height: isEmailFocused ? 2 : 0},
              shadowOpacity: isEmailFocused ? 0.6 : 0,
              shadowRadius: 4,
              elevation: isEmailFocused ? 4 : 0,
            },
          ]}
          placeholder="EMAIL"
          value={email}
          onChangeText={handlecheckEmail}
          onFocus={handleEmailFocus}
          onBlur={() => setIsEmailFocused(false)}
        />
        {checkvalidEmail ? (
          <Text style={{color: 'red'}}>Wrong Email</Text>
        ) : (
          <Text></Text>
        )}
        <TextInput
          style={[
            styles.childcontainer2,
            {
              borderBottomWidth: 2,
              borderBottomColor: isPasswordFocused ? 'transparent' : '#A0A0A0',
              shadowColor: isPasswordFocused ? '#808080' : 'transparent',
              shadowOffset: {width: 0, height: isPasswordFocused ? 2 : 0},
              shadowOpacity: isPasswordFocused ? 0.6 : 0,
              shadowRadius: 2,
              elevation: isPasswordFocused ? 4 : 0,
            },
          ]}
          placeholder="PASSWORD"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          onFocus={handlePasswordFocus}
          onBlur={() => setIsPasswordFocused(false)}
        />
        <LinearGradient
          colors={['#f5ba0a', '#DAA520', '#FFDB58']}
          style={{
            width: 120,
            flex: 0.33,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'flex-end',
            marginVertical: 30,
            borderRadius: 40,
          }}>
          <TouchableOpacity
            onPress={handleLogin}
            style={
              {
                // backgroundColor: '#f5ba0a',
              }
            }>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
              Log in
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
      <View style={styles.container3}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 15}}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={{fontSize: 15, fontWeight: 'bold', color: '#f5ba0a'}}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container1: {
    flex: 0.4,
    justifyContent: 'flex-end',
    padding: 30,
  },
  container2: {
    flex: 0.6,
    paddingHorizontal: 30,
    paddingVertical: 0,
  },
  container3: {
    flex: 0.1,
  },
  childcontainer2: {
    padding: 15,
  },
});
