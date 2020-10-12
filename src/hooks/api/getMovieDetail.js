import {useEffect} from 'react';

//redux
import {useDispatch, useSelector} from 'react-redux';
import {getQuery} from '@redux-requests/core';
import TYPE, {getMovieDetail} from '../../store/movie/actions';

//services
import Request from '../../config/requests';

const useGetMovieDetail = (movieId) => {
    const dispatch = useDispatch();
    const store = useSelector((state) => state);
    const {data, loading} = getQuery(store, {type: TYPE.GET_MOVIE_DETAIL});

    useEffect(() => {
        dispatch(getMovieDetail(Request.getMovieDetail(movieId)));
    }, [dispatch, movieId]);

    return [data, loading];
};

export default useGetMovieDetail;
