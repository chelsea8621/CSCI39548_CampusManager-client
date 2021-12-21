import {useEffect} from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {deleteStudentThunk, fetchAllStudentsThunk} from '../../store/thunks';
import {AllStudentsView} from '../views';

const AllStudentsContainer = ({fetchAllStudents, allStudents, deleteStudent}) => {
    useEffect(fetchAllStudents, [fetchAllStudents]);
    return (
        <AllStudentsView
            students={allStudents}
            deleteStudent={deleteStudent}
        />
    )
}

// Map state to props;
const mapState = state => ({
    allStudents: state.allStudents,
});

// Map dispatch to props;
const mapDispatch = dispatch => ({
    fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
    deleteStudent: studentId => dispatch(deleteStudentThunk(studentId)),
});

// Type check props;
AllStudentsContainer.propTypes = {
    allStudents: PropTypes.array.isRequired,
    fetchAllStudents: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(AllStudentsContainer);