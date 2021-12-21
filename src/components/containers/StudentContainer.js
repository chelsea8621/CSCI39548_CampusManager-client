import React from "react";
import { connect } from "react-redux";
import {deleteStudentThunk, editStudentThunk, fetchStudentThunk} from "../../store/thunks";
import { StudentView } from "../views";
import {withRouter} from "react-router-dom";
import GenericSingularContainer from "./GenericSingularContainer";

const StudentContainer = ({ history, match, student: object, fetchStudent, editStudent: editObject, deleteStudent}) => {
    const deleteObject = () => {
        deleteStudent(object.id);
        history.goBack();
    }
    const fetchObject = () => fetchStudent(match.params.id);
    return <GenericSingularContainer
        ViewComponent={props => <StudentView student={object} {...props}/>}
        {...{ object, fetchObject, editObject, deleteObject }}
    />;

}

// map state to props
const mapState = state => ({
    student: state.student,
});

// map dispatch to props
const mapDispatch = dispatch => ({
    fetchStudent: id => dispatch(fetchStudentThunk(id)),
    editStudent: student => dispatch(editStudentThunk(student)),
    deleteStudent: id => dispatch(deleteStudentThunk(id))
});

export default withRouter(connect(mapState, mapDispatch)(StudentContainer));