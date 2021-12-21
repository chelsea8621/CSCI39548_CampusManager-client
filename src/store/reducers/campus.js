import {
    ADD_STUDENT,
    DELETE_CAMPUS,
    DELETE_STUDENT,
    EDIT_CAMPUS,
    EDIT_STUDENT,
    FETCH_CAMPUS
} from "../actions/actionTypes";
import students from "./students";

const initialState = {
    students: [],
};

const campus = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CAMPUS:
        case EDIT_CAMPUS:
            return action.payload;
        case DELETE_CAMPUS:
            return initialState;
        case ADD_STUDENT:
            return {
                ...state,
                students: students(state.students, action)
            }
        case DELETE_STUDENT:
            return {
                ...state,
                students: students(state.students, action)
            }
        case EDIT_STUDENT:
            if (state.students.some(student => student.id === action.payload.id))
                if (state.id !== action.payload.campusId)
                    return campus(state, {
                        payload: action.payload.id,
                        type: DELETE_STUDENT });
                else
                    return {
                        ...state,
                        students: students(state.students, action)
                    };
            else if (state.id === action.payload.campusId)
                return campus(state, {...action, type: ADD_STUDENT})
            else
                return state;
        default:
            return state;
    }
};

export default campus;