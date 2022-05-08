/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyTabs from './src/navigation';
import {StatusBar} from 'react-native';
import colors from './src/assets/colors';

const theme = {
  colors: {
    background: 'transparent',
  },
};

const App = () => {
  return (
    <NavigationContainer NavigationContainer theme={theme}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <MyTabs />
    </NavigationContainer>
  );
};

export default App;
