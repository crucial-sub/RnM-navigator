import {useQuery, useQueryClient} from '@tanstack/react-query';
import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {CharacterType, getCharacters} from '../../api/getCharacters';

const LISTHEADERTITLE = 'Characters';

const CharacterFlatList = () => {
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

  const renderItem = React.useCallback(
    ({item}: {item: CharacterType}) => (
      <View style={styles.itemWrapper}>
        <Image source={{uri: item.image}} style={styles.itemImage} />
        <View style={styles.itemInfoWrapper}>
          <Text style={styles.itemName}>{item.name}</Text>
          <View style={styles.itemStatusWrapper}>
            <View
              style={[
                styles.itemStatus,
                {
                  backgroundColor:
                    item.status === 'Alive'
                      ? '#8CD790'
                      : item.status === 'Dead'
                      ? 'red'
                      : '#dfa316',
                },
              ]}></View>
            <Text style={styles.itemStatusText}>
              {item.status} - {item.species}
            </Text>
          </View>
        </View>
      </View>
    ),
    [],
  );

  const keyExtractor = React.useCallback(
    (item: CharacterType) => `character-id-${item.id}`,
    [],
  );

  const listHeader = React.useCallback(
    () => <Text style={styles.listHeaderText}>{LISTHEADERTITLE}</Text>,
    [],
  );

  React.useEffect(() => {
    if (isSuccess) setCharacterList(characters);
  }, [isLoading, isError, isSuccess]);

  return (
    <FlatList
      data={characterList}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      numColumns={2}
      horizontal={false}
      columnWrapperStyle={styles.columnWrapper}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={listHeader}
      ListHeaderComponentStyle={styles.listHeader}
      stickyHeaderIndices={[0]}
    />
  );
};

export default CharacterFlatList;

const styles = StyleSheet.create({
  listHeader: {
    backgroundColor: '#0A0A0A',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  listHeaderText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
  },
  itemWrapper: {
    width: '47%',
    height: 204,
    backgroundColor: '#1D1D1B',
    borderRadius: 12,
    padding: 12,
    gap: 10,
    marginBottom: 20,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  itemImage: {
    flex: 1,
    borderRadius: 12,
  },
  itemInfoWrapper: {
    gap: 8,
  },
  itemName: {
    fontWeight: '700',
    color: '#FFFFFF',
  },
  itemStatusWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  itemStatus: {
    width: 5,
    height: 5,
    borderRadius: 100,
    backgroundColor: '#8CD790',
  },
  itemStatusText: {
    fontWeight: '700',
    fontSize: 10,
    color: '#FFFFFF',
  },
});
