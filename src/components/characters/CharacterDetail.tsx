import {useQuery, useQueryClient} from '@tanstack/react-query';
import React from 'react';
import {ActivityIndicator, Image, StyleSheet, Text, View} from 'react-native';
import {CharacterType, getCharacter} from '../../api/getCharacters';

type PropsType = {
  character: CharacterType;
};

const CharacterDetail = ({character}: PropsType) => {
  return (
    <View style={styles.wrapper}>
      <Image source={{uri: character.image}} style={styles.characterImage} />
      <View style={styles.itemInfoWrapper}>
        <Text style={styles.itemName}>{character.name}</Text>
        <View style={styles.itemStatusWrapper}>
          <View
            style={[
              styles.itemStatus,
              {
                backgroundColor:
                  character.status === 'Alive'
                    ? '#8CD790'
                    : character?.status === 'Dead'
                    ? 'red'
                    : '#dfa316',
              },
            ]}></View>
          <Text style={styles.itemStatusText}>
            {character.status} - {character.species}
          </Text>
        </View>
        <Text style={styles.itemEtc}>Gender: {character.gender}</Text>
        <Text style={styles.itemEtc}>Location: {character.location.name}</Text>
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
    height: 398,
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
    gap: 4,
    marginBottom: 30,
  },
  itemStatus: {
    width: 5,
    height: 5,
    borderRadius: 100,
    backgroundColor: '#8CD790',
  },
  itemStatusText: {
    fontWeight: '700',
    fontSize: 12,
    color: '#FFFFFF',
  },
  itemEtc: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
});
