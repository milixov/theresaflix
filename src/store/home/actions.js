import TYPE from './_types';
import {CACHE_TIME} from '../../config/enums';

export const getGenres = (request) => ({
    type: TYPE.GET_CATEGORIES,
    request,
    meta: {cache: CACHE_TIME},
});

export default TYPE;
