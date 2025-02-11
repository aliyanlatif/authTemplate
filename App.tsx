import React from 'react';
import {SafeAreaView} from 'react-native';
import LoginScreen from './src/screens/login';

const App: React.FC = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <LoginScreen />
    </SafeAreaView>
  );
};

export default App;
