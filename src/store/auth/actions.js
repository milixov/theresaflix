import TYPE from './_types';
import {CACHE_TIME} from '../../config/enums';

export const generateToken = (request) => ({
    type: TYPE.GENERATE_TOKEN,
    request,
    meta: {cache: CACHE_TIME},
});

export default TYPE;
