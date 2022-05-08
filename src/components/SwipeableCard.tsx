import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import colors from '../assets/colors';
import {CatListResponse} from '../services';
import {Text} from './Text';

export default ({item}: {item: CatListResponse}) => {
  return (
    <ImageBackground
      style={styles.container}
      imageStyle={styles.image}
      source={{uri: item.image.url}}
      resizeMode="cover"
      resizeMethod="scale">
      <View style={styles.details}>
        <View style={styles.detailsContent}>
          <View>
            <Text style={styles.title}>{item?.name}</Text>
            <Text style={styles.subtitle}>{item?.origin}</Text>
          </View>
          <Text style={styles.dogFriendlyRate}>{item?.dog_friendly}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 343,
    maxHeight: 446,
    justifyContent: 'flex-end',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.9,
    elevation: 1,
  },
  image: {
    borderRadius: 16,
  },
  details: {
    backgroundColor: colors.white,
    width: '85%',
    height: 48,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  detailsContent: {
    marginTop: 8,
    marginLeft: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: colors.fontPrimary,
    fontWeight: 'bold',
    fontSize: 16,
  },
  subtitle: {
    color: colors.fontSecondary,
    fontSize: 8,
  },
  dogFriendlyRate: {
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 16,
  },
});
