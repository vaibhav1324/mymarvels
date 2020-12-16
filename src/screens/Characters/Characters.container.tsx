import {getAllCharaters} from 'api/characters';
import React from 'react';
import {useQuery} from 'react-query';
import {CharactersProps} from './Characters.props';
import CharactersView from './Characters.view';

const CharactersContainer = (props: CharactersProps) => {
    const {data, isLoading} = useQuery('fetch-all-characters', getAllCharaters);
    if (typeof data === 'object') {
        data.map((i) => console.log(i.name));
    }

    return <CharactersView />;
};

export default CharactersContainer;
