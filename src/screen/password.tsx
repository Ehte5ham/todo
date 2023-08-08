import {StyleSheet, TextInput, View, Text} from 'react-native';
import React, {useState} from 'react';

const Password = () => {
  const [password, setPassword] = useState('');

  const getPasswordStrength = (password: string) => {
    const passwordLength = password.trim().length;
    if (passwordLength < 4) {
      return {
        borderBottomColor: 'red',
        borderBottomWidth: 2,

        color: 'black',
      };
    } else if (passwordLength >= 4 && passwordLength < 7) {
      return {
        borderBottomColor: 'pink',
        borderBottomWidth: 3,
        color: 'black',
      };
    } else {
      return {
        borderBottomColor: 'green',
        borderBottomWidth: 4,
        color: 'black',
      };
    }
  };

  const getPasswordStrengthText = (password: string) => {
    const passwordLength = password.trim().length;
    if (passwordLength >= 1 && passwordLength < 4) {
      return 'Weak';
    } else if (passwordLength >= 4 && passwordLength < 7) {
      return 'Middle';
    } else if (passwordLength >= 7) {
      return 'Strong';
    }
  };

  return (
    <View>
      <TextInput
        style={[styles.password, getPasswordStrength(password)]}
        onChangeText={text => setPassword(text)}
        value={password}
        placeholder="Enter your password here"
        secureTextEntry={true}
      />
      <Text style={styles.passwordStrengthText}>
        {getPasswordStrengthText(password)}
      </Text>
    </View>
  );
};

export default Password;

const styles = StyleSheet.create({
  password: {
    fontSize: 16,
    padding: 10,
  },
  passwordStrengthText: {
    textAlign: 'center',
    marginTop: 5,
    color: 'black',
  },
});
