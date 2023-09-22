import React from 'react';
import { ComicsProps } from './Comics.props';
import ComicsView from './Comics.view';
import { useComicsQuery } from 'hooks/useComicsQuery';

const ComicsContainer = (props: ComicsProps) => {
  const { data, isLoading } = useComicsQuery();

  return <ComicsView comics={data || []} isLoading={isLoading} />;
};

export default ComicsContainer;
