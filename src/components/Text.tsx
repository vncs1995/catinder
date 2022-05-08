import React from 'react';
import {
  Text as RNText,
  StyleSheet,
  TextProps as RNTextProps,
} from 'react-native';

type TextProps = {
  children: React.ReactNode;
};

export const Text = ({children, ...props}: TextProps & RNTextProps) => {
  return (
    <RNText style={styles.text} {...props}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'NunitoSans-Bold',
  },
});
