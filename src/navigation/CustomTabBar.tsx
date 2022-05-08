import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../assets/colors';
import {Icon} from '../components/Icon';

const CustomTabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({name: route.name, merge: true});
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          const getIconName = () => {
            let iconName;

            switch (route.name) {
              case 'Paw':
                iconName = 'paw';
                break;
              case 'Messages':
                iconName = 'comment';
                break;
              case 'Profile':
                iconName = 'user';
                break;
              default:
                iconName = 'paw';
                break;
            }

            return iconName;
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tabBarItem}>
              <Icon
                name={getIconName()}
                size={15}
                color={isFocused ? colors.pink : colors.fontPrimary}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};
export default CustomTabBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  tabContainer: {
    marginBottom: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 36,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 0.9,
    elevation: 2,
  },
  tabBarItem: {
    paddingVertical: 14,
    paddingHorizontal: 26,
  },
});
