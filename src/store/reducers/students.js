import * as at from "../actions/actionTypes";

// REDUCER;
const allStudents = (state = [], action) => {
    switch (action.type) {
        case at.FETCH_ALL_STUDENTS:
            return action.payload;
        case at.ADD_STUDENT:
            return [...state, action.payload]
        case at.DELETE_STUDENT:
            console.log(state, action);
            return state.filter(student => student.id !== action.payload);
        case at.EDIT_STUDENT:
            return state.map(student =>
                student.id === action.payload.id ? action.payload : student
            );
        // might need delete campus case
        // edit campuscase
        default:
            return state;
    }
};

export default allStudents;