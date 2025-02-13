import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Alert } from 'react-native';

const SubmitExample = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const HandleSubmit = () => {
    Alert.alert('Submitted Text:', `First Name: ${firstname}\nLast Name: ${lastname}\nEmail: ${email}\nPhone: ${phone}`);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter First Name"
        onChangeText={(value) => setFirstname(value)}
        returnKeyType="done"
        onSubmitEditing={HandleSubmit}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Last Name"
        onChangeText={(value) => setLastname(value)}
        returnKeyType="done"
        onSubmitEditing={HandleSubmit}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        keyboardType="email-address"
        onChangeText={(value) => setEmail(value)}
        returnKeyType="done"
        onSubmitEditing={HandleSubmit}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Phone Number"
        keyboardType="phone-pad"
        onChangeText={(value) => setPhone(value)}
        returnKeyType="done"
        onSubmitEditing={HandleSubmit}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        secureTextEntry={true}
        onChangeText={(value) => setPassword(value)}
      />
      <Text>Password length: {password.length}</Text>
      <TextInput
        style={styles.input}
        placeholder="Press Enter"
        keyboardType=""

        returnKeyType="done"
        onSubmitEditing={HandleSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default SubmitExample;
