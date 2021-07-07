import * as usersActions from '../action/users.actions';

const initialState = {
    users:[],
    loadingUsers: false,
    errorUsers: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case usersActions.GET_USERS.REQUEST:
            return {
                ...state,
                loadingUsers: true,
            };
        case usersActions.GET_USERS.SUCCESS:
            return {
                ...state,
                users: action.payload.users,
                loadingUsers: false,
            };
        case usersActions.GET_USERS.FAILURE:
            return {
                ...state,
                errorUsers: action.payload,
                loadingUsers: false,
            };
        default:
            return state;
    }
} 