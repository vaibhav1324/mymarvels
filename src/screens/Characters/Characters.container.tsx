import React from 'react';
import { Character } from 'types/characters';
import { CharactersProps } from './Characters.props';
import CharactersView from './Characters.view';
import { useCharactersQuery } from 'hooks/useCharactersQuery';

const left_spacer: Partial<Character> = {
  id: 11100,
};
const right_spacer: Partial<Character> = {
  id: 22200,
};

const CharactersContainer = (props: CharactersProps) => {
  const { data, isLoading } = useCharactersQuery();

  data?.unshift(left_spacer);
  data?.push(right_spacer);

  return <CharactersView characters={data} isLoading={isLoading} />;
};

export default CharactersContainer;
