import { getAllComics } from 'api/comics';
import { Alert } from 'react-native';
import { QueryResult, useQuery } from 'react-query';
import { Comics } from 'types/comics';

const useComicsQuery = (): QueryResult<Comics[], unknown> => {
  const queryResult = useQuery('get-all-comics', getAllComics, {
    onError: (err) => Alert.alert('Error', JSON.stringify(err)),
  });

  return queryResult;
};

export { useComicsQuery };
