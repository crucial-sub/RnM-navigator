import {useQuery} from '@tanstack/react-query';
import React, {useEffect} from 'react';
import {ActivityIndicator, SafeAreaView, StyleSheet} from 'react-native';
import {getCharacter} from '../api/getCharacters';
import CharacterDetail from '../components/characters/CharacterDetail';

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
      {id !== data?.id && (
        <ActivityIndicator
          size={'large'}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: '#0A0A0A',
          }}
        />
      )}
      {id === data?.id && <CharacterDetail character={data!} />}
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
