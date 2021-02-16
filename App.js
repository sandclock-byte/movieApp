import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <SafeAreaView>
          <Text>Hola Mundo</Text>
          <Button
            icon='image'
            mode='contained'
            onPress={() => console.log('Pressed')}
          >
            Press me
        </Button>
        </SafeAreaView>
      </NavigationContainer>
    </PaperProvider>
  )
}
