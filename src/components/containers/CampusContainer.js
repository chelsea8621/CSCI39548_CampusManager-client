import React from "react";
import {connect} from "react-redux";
import {deleteCampusThunk, deleteStudentThunk, editCampusThunk, fetchCampusThunk} from "../../store/thunks";

import {CampusView} from "../views";
import GenericSingularContainer from "./GenericSingularContainer";
import {Link} from "react-router-dom";
import {Button} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const CampusContainer = ({history, match, campus: object, fetchCampus, editCampus: editObject, deleteCampus, deleteStudent}) => {
    const AddStudent = ({ className }) =>
        <Link className={className} to={{pathname: "/newstudent", search: `?campusId=${object.id}`}}>
            <Button aria-label="Add New Campus" startIcon={<AddCircleIcon/>}
                    variant="contained" color="primary" style={{marginRight: '10px'}}>
                Add New Student
            </Button>
        </Link>;
    const deleteObject = () => {
        deleteCampus(object.id);
        history.goBack();
    }
    const fetchObject = () => fetchCampus(match.params.id);
    return <GenericSingularContainer
        ActionButtonComponent={AddStudent}
        ViewComponent={props => <CampusView campus={object} deleteStudent={deleteStudent} {...props}/>}
        {...{object, fetchObject, editObject, deleteObject}}
    />;
}

// map state to props
const mapState = state => ({
    campus : state.campus,
});

// map dispatch to props
const mapDispatch = dispatch => ({
    fetchCampus: id => dispatch(fetchCampusThunk(id)),
    editCampus: campus => dispatch(editCampusThunk(campus)),
    deleteCampus: id => dispatch(deleteCampusThunk(id)),
    deleteStudent: id => dispatch(deleteStudentThunk(id))
});

export default connect(mapState, mapDispatch)(CampusContainer);