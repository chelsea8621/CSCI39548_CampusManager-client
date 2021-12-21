import {useEffect} from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {deleteStudentThunk, fetchAllStudentsThunk} from '../../store/thunks';
import {AllStudentsView} from '../views';
import NavigableContainer from "./NavigableContainer";
import {useStyles} from "../Styles";
import {Link} from "react-router-dom";
import {Button} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const AddStudent = ({ className }) =>
    <Link className={className} to={`newstudent`}>
        <Button aria-label="Add New Campus" startIcon={<AddCircleIcon/>}
                variant="contained" color="primary" style={{marginRight: '10px'}}>
            Add New Student
        </Button>
    </Link>
;


const AllStudentsContainer = ({fetchAllStudents, allStudents, deleteStudent}) => {
    useEffect(fetchAllStudents, [fetchAllStudents]);
    const classes = useStyles();
    return (
        <NavigableContainer classes={classes} ActionButtonComponent={AddStudent}>
            <AllStudentsView
                students={allStudents}
                deleteStudent={deleteStudent}
            />
        </NavigableContainer>
    );
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