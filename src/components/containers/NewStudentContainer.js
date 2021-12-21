import {connect} from 'react-redux';
import {addStudentThunk} from '../../store/thunks';
import GenericCreationContainer from "./GenericCreationContainer";
import {NewStudentView} from "../views";

const NewStudentContainer = ({ addStudent }) =>
    <GenericCreationContainer
        addObject={addStudent}
        objectType="student"
        ViewComponent={({handleSubmit}) =>
            <NewStudentView
                handleSubmit={handleSubmit}
                campusId={new URLSearchParams(document.location.search).get("campusId")}/>}
    />
;

const mapDispatchToProps = dispatch => ({
    addStudent: student => dispatch(addStudentThunk(student)),
});


export default connect(null, mapDispatchToProps)(NewStudentContainer);