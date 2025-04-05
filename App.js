import React, { useEffect } from 'react';
import { ScrollView, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import Dashboard from './src/screens/Dashboard';
import messaging from '@react-native-firebase/messaging';
import { registerFCM } from './fcm';

export default function App() {
  useEffect(() => {
    registerFCM();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#181818" barStyle="light-content" />
      <ScrollView>
        <Dashboard />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
});
