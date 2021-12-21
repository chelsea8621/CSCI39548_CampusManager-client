import * as ac from './actions/actionCreators';

const axios = require('axios');

// THUNKS

//All campuses
export const fetchAllCampusesThunk = () => async dispatch => {
    try {
        const res = await axios.get(`/api/campuses`);
        dispatch(ac.fetchAllCampuses(res.data));
    } catch (err) {
        console.error(err);
    }
};

export const addCampusThunk = campus => async dispatch => {
    try {
        const res = await axios.post(`/api/campuses`, campus);
        dispatch(ac.addCampus(res.data));
        return res.data;
    } catch (err) {
        console.error(err);
    }
};

export const deleteCampusThunk = campusId => async dispatch => {
    try {
        await axios.delete(`/api/campuses/${campusId}`);
        dispatch(ac.deleteCampus(campusId));
    } catch (err) {
        console.error(err);
    }
};

export const editCampusThunk = campus => async dispatch => {
    try {
        const updatedCampus = await axios.put(`/api/campuses/${campus.id}`, campus);
        dispatch(ac.editCampus(updatedCampus.data));
    } catch (err) {
        console.error(err);
    }
};


//Single campus
export const fetchCampusThunk = id => async dispatch => {
    try {
        let res = await axios.get(`/api/campuses/${id}`);
        dispatch(ac.fetchCampus(res.data));
    } catch (err) {
        console.error(err);
    }
};

//All students
export const fetchAllStudentsThunk = () => async dispatch => {
    try {
        let res = await axios.get(`/api/students`);
        dispatch(ac.fetchAllStudents(res.data));
    } catch (err) {
        console.error(err);
    }
};

export const addStudentThunk = student => async dispatch => {
    try {
        let res = await axios.post(`/api/students`, student);
        dispatch(ac.addStudent(res.data));
        return res.data;
    } catch (err) {
        console.error(err);
    }
};

export const deleteStudentThunk = studentId => async dispatch => {
    try {
        await axios.delete(`/api/students/${studentId}`);
        dispatch(ac.deleteStudent(studentId));
    } catch (err) {
        console.error(err);
    }
};

export const editStudentThunk = student => async dispatch => {
    try {
        const updatedStudent = await axios.put(`/api/students/${student.id}`, student);
        dispatch(ac.editStudent(updatedStudent.data));
    } catch (err) {
        console.error(err);
    }
};

//Single student
export const fetchStudentThunk = id => async dispatch => {
    try {
        const res = await axios.get(`/api/students/${id}`);
        dispatch(ac.fetchStudent(res.data));
    } catch (err) {
        console.error(err);
    }
};
