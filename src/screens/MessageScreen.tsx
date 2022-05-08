import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import colors from '../assets/colors';
import {Text} from '../components/Text';

export const MessageScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>02</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    marginTop: 120,
    fontSize: 126,
    fontWeight: 'bold',
    color: colors.fontSecondary,
  },
});
