import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView>
        <Text>Hola Mundo</Text>
      </SafeAreaView>
    </PaperProvider>
  )
}
