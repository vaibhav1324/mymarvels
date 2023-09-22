import { Alert } from 'react-native';

import { getAllCharaters } from 'api/characters';
import { QueryResult, useQuery } from 'react-query';

import { Character } from 'types/characters';

const useCharactersQuery = (): QueryResult<Partial<Character>[], unknown> => {
  const queryResult = useQuery('fetch-all-characters', getAllCharaters, {
    onError: (err) => Alert.alert('Error', JSON.stringify(err)),
  });

  return queryResult;
};

export { useCharactersQuery };
