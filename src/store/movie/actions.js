import TYPE from './_types';
import {CACHE_TIME} from '../../config/enums';

export const discoverMovie = (request) => ({
    type: TYPE.DISCOVER_MOVIE,
    request,
    meta: {cache: CACHE_TIME},
});

export const clearMovie = () => ({
    type: TYPE.CLEAR_MOVIES,
});

export default TYPE;
