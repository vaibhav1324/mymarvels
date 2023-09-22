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
  const { data = [], isLoading } = useCharactersQuery();

  const filteredCharacters = data?.filter(
    (c) => !c.thumbnail?.path?.includes('image_not_available'),
  );

  filteredCharacters?.unshift(left_spacer);
  filteredCharacters?.push(right_spacer);

  return (
    <CharactersView characters={filteredCharacters} isLoading={isLoading} />
  );
};

export default CharactersContainer;
