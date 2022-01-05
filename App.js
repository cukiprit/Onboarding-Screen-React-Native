import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Routing from './src/router/Routing';

export default function App() {
  return (
    <View style={styles.container}>
      <Routing />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE559',
  },
});
