import {getAllComics} from 'api/comics';
import React from 'react';
import {useQuery} from 'react-query';
import {ComicsProps} from './Comics.props';
import ComicsView from './Comics.view';

const ComicsContainer = (props: ComicsProps) => {
    const {data, isError, error, isLoading} = useQuery(
        'get-all-comics',
        getAllComics,
    );

    return <ComicsView comics={data || []} isLoading={isLoading} />;
};

export default ComicsContainer;
