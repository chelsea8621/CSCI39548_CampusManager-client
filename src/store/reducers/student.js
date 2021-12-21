import {DELETE_CAMPUS, DELETE_STUDENT, EDIT_CAMPUS, EDIT_STUDENT, FETCH_STUDENT} from "../actions/actionTypes";

const initialState = {
    campus: {},
};

// REDUCER;
const student = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_CAMPUS:
            return {
                ...state,
                campus: initialState.campus
            };
        case EDIT_CAMPUS:
            return action.payload.id === state.campusId ? {
                ...state,
                campus: action.payload
            } : state;
        case FETCH_STUDENT:
        case EDIT_STUDENT:
            return action.payload;
        case DELETE_STUDENT:
            return initialState;
        default:
            return state;
    }
};

export default student;