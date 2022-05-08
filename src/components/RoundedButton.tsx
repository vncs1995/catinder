import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import colors from '../assets/colors';
import {Icon} from './Icon';

type RoundedButtonProps = {
  iconName: string;
  color: typeof colors[keyof typeof colors];
};

export const RoundedButton = ({
  iconName,
  color,
  ...props
}: RoundedButtonProps & TouchableOpacityProps) => {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Icon name={iconName} color={color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 54,
    height: 54,
    backgroundColor: colors.white,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.9,
    elevation: 2,
  },
});
