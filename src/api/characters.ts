import {api} from 'api';
import {Character, CharacterDataWrapper} from 'types/characters';
import {API_URL} from './instance';

export const getAllCharaters = async (): Promise<Partial<Character>[]> => {
    const {data} = await api.get<CharacterDataWrapper>(
        `${API_URL}/characters`,
        {
            params: {
                limit: 100,
                modifiedSince: new Date('12/12/2014').toISOString(),
            },
        },
    );
    return data.data.results;
};
