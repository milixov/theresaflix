import {API_KEY} from './enums';

const requests = {
    generateToken: () => {
        return {
            method: 'GET',
            url: '/authentication/token/new',
            params: {
                api_key: API_KEY,
            },
        };
    },
    getCategories: () => {
        return {
            method: 'GET',
            url: '/genre/movie/list',
            params: {
                api_key: API_KEY,
            },
        };
    },
    discoverMovie: (genreId, page) => {
        return {
            method: 'GET',
            url: '/discover/movie',
            params: {
                api_key: API_KEY,
                with_genres: genreId,
                page,
            },
        };
    },
    getMovieDetail: (movieId) => {
        return {
            method: 'GET',
            url: `/movie/${movieId}`,
            params: {
                api_key: API_KEY,
            },
        };
    },
};

export default requests;
