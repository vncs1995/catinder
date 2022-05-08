import React from 'react';
import {StyleSheet, View} from 'react-native';
import colors from '../assets/colors';
import TinderFire from '../assets/imgs/tinder-fire.svg';
import {Icon} from './Icon';

export const ToggleBar = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.background, styles.active]}>
        <TinderFire width={12.11} height={13.92} />
      </View>
      <View style={[styles.background, styles.unactive]}>
        <Icon name="star" size={13} color={colors.disableGrey} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.backgroundGrey,
    width: 84,
    maxHeight: 28,
    borderRadius: 28,
  },
  background: {
    flex: 0.5,
    alignItems: 'center',
    padding: 5,
    margin: 2,
    borderRadius: 24,
  },
  active: {
    backgroundColor: colors.white,
  },
  unactive: {
    backgroundColor: colors.backgroundGrey,
  },
});
