import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = ({navigation}: any) => {
  const [isFocused, setIsFocused] = useState({
    fullName: true,
    email: false,
    password: false,
    confirmPassword: false,
  });
  const [name, setName] = useState('');

  const saveData = async (uid: string) => {
    try {
      await AsyncStorage.setItem('uid', uid);

      // await AsyncStorage.setItem('password', password);
      console.log('Data successfully saved');
    } catch (e) {
      Alert.alert('Failed to save the data to the storage');
    }
  };

  const handleFocus = (field: any) => {
    setIsFocused(prev => ({...prev, [field]: true}));
  };

  const handleBlur = (field: any) => {
    setIsFocused(prev => ({...prev, [field]: false}));
  };

  const [email, setemail] = useState('');
  const [checkvalidEmail, setcheckvalidEmail] = useState(false);

  const [password, setpassword] = useState('');
  const [confirmPassword, setconfirmpassword] = useState('');
  const [checkvalidPassword, setcheckvalidPassword] = useState(false);

  console.log(password);
  console.log(email);
  console.log(name);

  const handlecheckEmail = (text: any) => {
    let regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    setemail(text);
    if (regex.test(text)) {
      setcheckvalidEmail(false);
    } else {
      setcheckvalidEmail(true);
    }
  };

  const handlecheckPassword = (text: any) => {
    setconfirmpassword(text);
  };

  const sinUpUser = (navigation: any) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log('response uid', res?.user?.uid);
        saveData(res?.user?.uid);
        Alert.alert('Success', 'User account created & signed in!');

        navigation.navigate('Login');
      })

      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('Error', 'That email address is already in use!');
        } else if (error.code === 'auth/invalid-email') {
          Alert.alert('Error', 'That email address is invalid!');
        } else {
          Alert.alert('Error', 'Something went wrong. Please try again later.');
        }
        console.error(error);
      });
  };

  const handleCheck = () => {
    console.log('email', email);
    console.log('password', password);
    console.log('password', confirmPassword);
    if (password === confirmPassword) {
      sinUpUser(navigation);
      setcheckvalidPassword(false);
    } else {
      setcheckvalidPassword(true);
    }
  };

  return (
    <View style={styles.maincontainer}>
      <View style={styles.container1}>
        <Text style={styles.headerText}>Create Account</Text>
      </View>
      <View style={styles.container2}>
        <View
          style={[styles.inputContainer, isFocused.fullName && styles.shadow]}>
          <TextInput
            placeholder="Full Name"
            style={styles.input}
            value={name}
            onChangeText={text => setName(text)}
            onFocus={() => handleFocus('fullName')}
            onBlur={() => handleBlur('fullName')}
          />
        </View>
        <View style={[styles.inputContainer, isFocused.email && styles.shadow]}>
          <TextInput
            placeholder="Email"
            value={email}
            style={styles.input}
            onFocus={() => handleFocus('email')}
            onBlur={() => handleBlur('email')}
            onChangeText={text => handlecheckEmail(text)}
          />
        </View>
        {checkvalidEmail ? (
          <Text style={styles.errorText}>Wrong Email</Text>
        ) : null}
        <View
          style={[styles.inputContainer, isFocused.password && styles.shadow]}>
          <TextInput
            placeholder="Password"
            style={styles.input}
            secureTextEntry
            onFocus={() => handleFocus('password')}
            onBlur={() => handleBlur('password')}
            value={password}
            onChangeText={text => setpassword(text)}
          />
        </View>
        <View
          style={[
            styles.inputContainer,
            isFocused.confirmPassword && styles.shadow,
          ]}>
          <TextInput
            placeholder="Confirm Password"
            style={styles.input}
            secureTextEntry
            onFocus={() => handleFocus('confirmPassword')}
            onBlur={() => handleBlur('confirmPassword')}
            onChangeText={text => handlecheckPassword(text)}
          />
        </View>
        {checkvalidPassword ? (
          <Text style={styles.errorText}>Passwords do not match</Text>
        ) : null}
        <LinearGradient
          colors={['#f5ba0a', '#DAA520', '#FFDB58']}
          style={styles.loginButton}>
          <TouchableOpacity onPress={() => handleCheck()}>
            <Text style={styles.loginButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
      <View style={styles.container3}>
        <View style={styles.signInContainer}>
          <Text style={styles.signInText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.signInLink}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container1: {
    flex: 0.25,
    justifyContent: 'flex-end',
    paddingLeft: 30,
  },
  container2: {
    flex: 0.6,
    padding: 30,
  },
  container3: {
    flex: 0.15,
  },
  headerText: {
    fontSize: 35,
    color: 'black',
    fontWeight: 'bold',
  },
  inputContainer: {
    marginVertical: 10,
  },
  input: {
    borderBottomWidth: 2,
    paddingTop: 10,
    paddingHorizontal: 10,
    borderBottomColor: '#A0A0A0',
  },
  shadow: {
    shadowColor: '#303030',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3, // For Android shadow
  },
  loginButton: {
    width: 120,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: 30,
    borderRadius: 40,
  },
  loginButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  signInContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInText: {
    fontSize: 15,
  },
  signInLink: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#f5ba0a',
    marginLeft: 5,
  },
  errorText: {
    color: 'red',
  },
});
