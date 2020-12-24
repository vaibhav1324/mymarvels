import {getAllCharaters} from 'api/characters';
import React, {useEffect, useState} from 'react';
import {useQuery} from 'react-query';
import {Character} from 'types/characters';
import {CharactersProps} from './Characters.props';
import CharactersView from './Characters.view';

const left_spacer: Partial<Character> = {
    id: 11100,
};
const right_spacer: Partial<Character> = {
    id: 22200,
};

const CharactersContainer = (props: CharactersProps) => {
    const {data, isError, isLoading, error} = useQuery(
        'fetch-all-characters',
        getAllCharaters,
    );
    data?.unshift(left_spacer);
    data?.push(right_spacer);

    return <CharactersView characters={data} isLoading={isLoading} />;
};

export default CharactersContainer;
