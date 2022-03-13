import {
    ADMIN_SUBMIT_FAILURE,
    ADMIN_SUBMIT_REQUEST,
    ADMIN_LOGIN_SUCCESS,
    ADMIN_LOGOUT_SUCCESS,
} from "./actionTypes";

const initAstate = {
    isAdmin: false,
    isAdminLoading: false,
    isAdminError: false
};

export const adminReducer = (currentState = initAstate, action) => {
    switch (action.type) {
        case ADMIN_SUBMIT_REQUEST: {
            return {
            ...currentState,
            AisLoading: true,
            AisError: false
            };
        }
        case ADMIN_LOGIN_SUCCESS: {
            return {
                isAdmin: true,
                isAdminLoading: false,
                isAdminError: false
            };
        }
        case ADMIN_LOGOUT_SUCCESS: {
            return {
                isAdmin: false,
                isAdminLoading: false,
                isAdminError: false
            };
        }

        case ADMIN_SUBMIT_FAILURE: {
            return {
            ...currentState,
            AisLoading: false,
            AisError: true
            };
        }

        default: {
            return currentState;
        }
    }
};


export default adminReducer