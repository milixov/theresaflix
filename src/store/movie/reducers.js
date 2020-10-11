import TYPE from './_types';

const initialState = {
    list: null,
    totalPages: null,
    totalCount: null,
    page: null,
};

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPE.CLEAR_MOVIES:
            return {
                ...state,
                ...initialState,
            };
        case TYPE.DISCOVER_MOVIE_SUCCESS:
            const res = action.response.data;

            let data;
            if (state.list) {
                if (Array.isArray(state.list)) {
                    data = [...state.list, ...res.results];
                }
            } else {
                data = res.results;
            }

            return {
                ...state,
                list: data,
                totalCount: res.total_results,
                totalPages: res.total_pages,
                page: res.page,
            };
        default:
            return state;
    }
};

export default movieReducer;
