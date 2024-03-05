import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useQuery, useQueryClient} from '@tanstack/react-query';
import {CharacterType, getCharacters} from '../../api/getCharacters';

const CharacterSectionList = () => {
  const queryClient = useQueryClient();
  const {
    data: characters,
    isLoading,
    isError,
    isSuccess,
    refetch,
  } = useQuery({
    queryKey: ['get-characters'],
    queryFn: getCharacters,
    staleTime: 5 * 60 * 1000,
  });

  const [characterList, setCharacterList] = React.useState<CharacterType[]>([]);

  React.useEffect(() => {
    if (isSuccess) setCharacterList(characters);
  }, [isLoading, isError, isSuccess]);

  return (
    <View>
      <Text style={styles.text}>CharacterSectionList</Text>
    </View>
  );
};

export default CharacterSectionList;

const styles = StyleSheet.create({
  text: {color: 'white'},
});
