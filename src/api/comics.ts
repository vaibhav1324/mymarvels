import {api} from 'api';
import {ComicDataWrapper, Comics} from 'types/comics';
import {API_URL} from './instance';

export const getAllComics = async (): Promise<Comics[]> => {
    const {data} = await api.get<ComicDataWrapper>(`${API_URL}/comics`);
    return data.data.results;
};
