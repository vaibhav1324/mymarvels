import {api} from 'api';
import {ComicDataWrapper, Comics} from 'types/comics';
import {API_URL} from './instance';

export const getAllComics = async (): Promise<Comics[]> => {
    const {data} = await api.get<ComicDataWrapper>(`${API_URL}/comics`, {
        params: {
            limit: 100,
            format: 'comic',
            startYear: 2018,
        },
    });
    return data.data.results;
};
