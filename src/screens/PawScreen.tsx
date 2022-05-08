import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ActivityIndicator,
  Alert,
} from 'react-native';
import colors from '../assets/colors';
import {RoundedButton} from '../components/RoundedButton';
import SwipeableCard from '../components/SwipeableCard';
import {ToggleBar} from '../components/ToggleBar';
import {
  listCats,
  CatListResponse,
  votePost,
  VotePostRequestBody,
} from '../services';
import SwipeCards from 'react-native-swipe-cards-deck';
import {Text} from '../components/Text';

export const PawScreen = () => {
  const [listOfCats, setListCats] = useState<CatListResponse[]>([]);
  const fetchCats = useCallback(async () => {
    const response = await listCats();
    console.log('responde: ', response);
    setListCats(response.data);
  }, []);

  useEffect(() => {
    fetchCats();
  }, [fetchCats]);

  async function sendVotePost(payload: VotePostRequestBody) {
    try {
      await votePost(payload);
    } catch (error) {
      Alert.alert('Oops!', 'Something went wrong');
    }
  }

  function handleYup(chosenCat: CatListResponse) {
    console.log(`Yup for ${chosenCat.name}`);
    const payload = {image_id: chosenCat.image.id, value: 1};
    sendVotePost(payload);
    return true; // return false if you wish to cancel the action
  }
  function handleNope(chosenCat: CatListResponse) {
    const payload = {image_id: chosenCat.image.id, value: 0};
    sendVotePost(payload);
    return true;
  }

  if (!listOfCats.length) {
    return <ActivityIndicator size={'large'} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <ToggleBar />
      <SwipeCards
        cards={listOfCats}
        renderCard={(cat: CatListResponse) => {
          return <SwipeableCard item={cat} />;
        }}
        keyExtractor={(cat: CatListResponse) => cat.name}
        renderNoMoreCards={() => <Text>No more cats for you</Text>}
        actions={{
          nope: {show: false, onAction: handleNope},
          yup: {show: false, onAction: handleYup},
        }}
        hasMaybeAction={false}
      />
      <View style={styles.voteButtons}>
        <RoundedButton
          onPress={() => console.log('tapped')}
          iconName="heart"
          color={colors.green}
        />
        <RoundedButton
          onPress={() => console.log('tapped')}
          iconName="times"
          color={colors.red}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  voteButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '80%',
  },
});
