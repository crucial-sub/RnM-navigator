import apiClient from './apiClient';

export interface CharacterListType {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: CharacterType[];
}

export interface CharacterType {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export const getAllCharacters = async (): Promise<CharacterType[]> => {
  const {data} = await apiClient.get<CharacterListType>('/character');

  return data.results;
};

export const getCharacter = async (id: number): Promise<CharacterType> => {
  const {data} = await apiClient.get<CharacterType>(`/character/${id}`);

  return data;
};
