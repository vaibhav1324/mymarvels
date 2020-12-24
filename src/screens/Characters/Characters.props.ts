import {ParamListBase} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {Character} from 'types/characters';

export type CharactersProps = StackScreenProps<ParamListBase> & {};

export type CharacterGeneratedProps = {
    isLoading: boolean;
    characters?: Array<Partial<Character>>;
};
