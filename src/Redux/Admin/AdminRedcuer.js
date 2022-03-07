import {
    ADMIN_SUBMIT_FAILURE,
    ADMIN_SUBMIT_REQUEST,
    ADMIN_SUBMIT_SUCCESS,
} from "./actionTypes";

const initAstate = {
    AisLoading: false,
    AisError: false
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
        case ADMIN_SUBMIT_SUCCESS: {
            return {
            ...currentState,
            AisLoading: false,
            AisError: false
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
