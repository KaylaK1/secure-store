import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { styles } from './assets/styles';

/**
 * An optional second argument to pass to SecureStore methods
 * @param SecureStoreOptions
 * authenticationPrompt - string - custom display message while requireAuthentication option is turned on.
 */

/**
 * Saves the key/value pair
 * @param key string
 * @param value string
 */
async function save(key: string, value: string) {
  await SecureStore.setItemAsync(key, value);
}

/**
 * Fetches the stored value associated with the key
 * getItemAsync(key, SecureStoreOptions)
 * @param SecureStoreOptions - An object
 * @param key string
 * @returns Promise<string | null>
 */
async function getValueFor(key: string) {
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    alert("This is the key value: \n" + result);
  } else {
    alert('No values stored under that key');
  }
}

export default function App() {
  const [key, onChangeKey] = React.useState('Your key here');
  const [value, onChangeValue] = React.useState('Your value here');

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Save an item, and grab it later!</Text>
      <Button
        title="Save this key/value pair"
        onPress={() => {
          save(key, value);
          onChangeKey('Your key here');
          onChangeValue('Your value here');
        }}
        />

    <Text style={styles.paragraph}>Enter your key</Text>
    <TextInput
      style={styles.textInput}
      onSubmitEditing={event => {
        getValueFor(event.nativeEvent.text);
      }}
      placeholder="Enter the key for the value you want to get"
      />
    </View>
  );
}
