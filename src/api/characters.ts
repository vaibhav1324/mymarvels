import {api} from 'api';
import {Character, CharacterDataWrapper} from 'types/characters';
import {API_URL} from './instance';

export const getAllCharaters = async (): Promise<Character[]> => {
    const {data} = await api.get<CharacterDataWrapper>(`${API_URL}/characters`);
    return data.data.results;
};
