import {useQuery} from '@tanstack/react-query';
import React from 'react';
import {ActivityIndicator, SafeAreaView, StyleSheet, View} from 'react-native';
import {CharacterType, getAllCharacters} from '../api/getCharacters';
import HomeHeader from '../components/HomeHeader';
import CharacterList from '../components/characters/CharacterList';

const HomeScreen = () => {
  const {data, isLoading, isError, isSuccess, refetch} = useQuery({
    queryKey: ['get-all-characters'],
    queryFn: getAllCharacters,
    staleTime: 5 * 60 * 1000,
  });
  const [characterList, setCharacterList] = React.useState<CharacterType[]>([]);

  React.useEffect(() => {
    if (isSuccess) setCharacterList(data);
  }, [isLoading, isError, isSuccess]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.wrapper}>
        <HomeHeader />
        {isLoading && (
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
        <CharacterList characterList={characterList} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0A0A0A',
  },
  wrapper: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 15,
    gap: 40,
  },
});
