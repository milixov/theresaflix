import {useEffect} from 'react';

//redux
import {useDispatch, useSelector} from 'react-redux';
import {getQuery} from '@redux-requests/core';
import TYPE, {generateToken} from '../../store/auth/actions';

//services
import axiosInstance from '../../config/axios';
import Request from '../../config/requests';

const useGenerateToken = () => {
    const dispatch = useDispatch();
    const store = useSelector((state) => state);
    const {loading} = getQuery(store, {type: TYPE.GENERATE_TOKEN});

    useEffect(() => {
        if (!store.auth.token) {
            dispatch(generateToken(Request.generateToken()));
        } else {
            axiosInstance.headers.Authorization = `Bearer ${store.auth.token}`;
        }
    }, [store.auth.token, dispatch]);

    return [store.auth.token, loading];
};

export default useGenerateToken;
