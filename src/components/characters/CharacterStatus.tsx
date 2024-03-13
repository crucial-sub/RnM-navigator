import React from 'react';
import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';

type PropsType = {
  status: string;
  species: string;
  wrapperStyle: ViewStyle;
  textStyle: TextStyle;
};

const CharacterStatus = ({
  status,
  species,
  wrapperStyle,
  textStyle,
}: PropsType) => {
  const handleItemStatus = (status: string) => ({
    backgroundColor:
      status === 'Alive' ? '#8CD790' : status === 'Dead' ? 'red' : '#dfa316',
  });

  return (
    <View style={wrapperStyle}>
      <View style={[styles.itemStatus, handleItemStatus(status)]} />
      <Text style={textStyle}>{`${status} - ${species}`}</Text>
    </View>
  );
};

export default React.memo(CharacterStatus);

const styles = StyleSheet.create({
  itemStatus: {
    width: 5,
    height: 5,
    borderRadius: 100,
    backgroundColor: '#8CD790',
  },
});
