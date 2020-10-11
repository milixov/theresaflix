import {useEffect, useState} from 'react';

//redux
import {useDispatch, useSelector} from 'react-redux';
import {getQuery} from '@redux-requests/core';
import TYPE, {clearMovie, discoverMovie} from '../../store/movie/actions';

//services
import Request from '../../config/requests';

const useDiscoverMovie = (genreId) => {
    const [page, setPage] = useState(1);

    const dispatch = useDispatch();
    const store = useSelector((state) => state);
    const {loading} = getQuery(store, {type: TYPE.DISCOVER_MOVIE});

    useEffect(() => {
        if (page === 1) {
            dispatch(clearMovie());
        }

        dispatch(discoverMovie(Request.discoverMovie(genreId, page)));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    return [
        store.movie.list,
        store.movie.totalPages,
        store.movie.totalCount,
        store.movie.page,
        loading,
        setPage,
    ];
};

export default useDiscoverMovie;
