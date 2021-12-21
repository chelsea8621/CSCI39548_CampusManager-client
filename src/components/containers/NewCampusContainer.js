import {connect} from 'react-redux';
import {addCampusThunk} from '../../store/thunks';
import GenericCreationContainer from "./GenericCreationContainer";
import {NewCampusView} from "../views";


const NewCampusContainer = ({ addCampus }) =>
    <GenericCreationContainer
        addObject={addCampus}
        objectType="campus"
        ViewComponent={NewCampusView}
    />;

const mapDispatchToProps = dispatch => ({
    addCampus: campus => dispatch(addCampusThunk(campus)),
});


export default connect(null, mapDispatchToProps)(NewCampusContainer);