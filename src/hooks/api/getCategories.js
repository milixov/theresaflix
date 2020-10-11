import {useEffect} from 'react';

//redux
import {useDispatch, useSelector} from 'react-redux';
import {getQuery} from '@redux-requests/core';
import TYPE, {getGenres} from '../../store/home/actions';

//services
import Request from '../../config/requests';

const useGetCategories = () => {
    const dispatch = useDispatch();
    const store = useSelector((state) => state);
    const {data, loading} = getQuery(store, {type: TYPE.GET_CATEGORIES});

    useEffect(() => {
        dispatch(getGenres(Request.getCategories()));
    }, [dispatch]);

    return [data, loading];
};

export default useGetCategories;
