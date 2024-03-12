import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {CharacterType} from '../../api/getCharacters';
import DetailScreenOverlay from './DetailScreenOverlay';
import CharacterStatus from './CharacterStatus';

type PropsType = {
  character: CharacterType;
};

const CharacterDetail = ({character}: PropsType) => {
  return (
    <View style={styles.wrapper}>
      <FastImage
        source={{uri: character.image}}
        style={styles.characterImage}
      />
      <DetailScreenOverlay />
      <View style={styles.itemInfoWrapper}>
        <Text style={styles.itemName}>{character.name}</Text>
        <CharacterStatus
          status={character.status}
          species={character.species}
          wrapperStyle={styles.itemStatusWrapper}
          textStyle={styles.itemStatusText}
        />
        <View style={styles.itemEtcWrapper}>
          <Text
            style={styles.itemEtcText}>{`Gender: ${character.gender}`}</Text>
          <Text style={styles.itemEtcText}>
            {`Location: ${character.location.name}`}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CharacterDetail;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: '100%',
    gap: 30,
  },
  characterImage: {
    width: '100%',
    aspectRatio: 1,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  itemInfoWrapper: {
    paddingHorizontal: 15,
    gap: 8,
  },
  itemName: {
    fontWeight: '800',
    color: '#FFFFFF',
    fontSize: 24,
  },
  itemStatusWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  itemStatusText: {
    fontWeight: '700',
    fontSize: 12,
    color: '#FFFFFF',
  },
  itemEtcWrapper: {
    marginTop: 20,
    gap: 10,
  },
  itemEtcText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
});
