import TYPE from './_types';

const initialState = {
    token: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPE.GENERATE_TOKEN_SUCCESS:
            return {
                ...state,
                token: action.response.data.request_token,
            };
        default:
            return state;
    }
};

export default authReducer;
