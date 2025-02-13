import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Alert, Button } from 'react-native';

const SubmitExample = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  
  
  const emailvalid = (input) => {
    if (!input.includes('@')) {
      setEmail(input);
    } else {
      setEmail(input);
    }
  };
  
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
        placeholder="Enter Email ....example123@gmail.com"
        keyboardType="email-address"
        value={email}
        onChangeText={emailvalid} // use the custom email handler
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
        maxLength={12}
      />
      
      <Button
          title="Submit"
          onPress={HandleSubmit}
          returnKeyType="done"
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
    marginBottom: 10,
  },
});

export default SubmitExample;
