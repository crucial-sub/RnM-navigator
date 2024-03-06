import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import CharacterDetail from '../components/characters/CharacterDetail';
import {useQuery} from '@tanstack/react-query';
import {CharacterType, getCharacter} from '../api/getCharacters';

const CharacterDetailScreen = ({route}: any) => {
  const {id} = route.params;

  const {data, isLoading, isError, isSuccess, refetch} = useQuery({
    queryKey: ['get-character'],
    queryFn: () => getCharacter(id),
    staleTime: 5 * 60 * 1000,
  });

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <SafeAreaView style={styles.safeArea}>
      {data && <CharacterDetail character={data} />}
    </SafeAreaView>
  );
};

export default CharacterDetailScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0A0A0A',
  },
});
