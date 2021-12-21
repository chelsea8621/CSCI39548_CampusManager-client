import {useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {deleteCampusThunk, fetchAllCampusesThunk} from "../../store/thunks";
import {AllCampusesView} from "../views";
import NavigableContainer from "./NavigableContainer";
import {useStyles} from "../Styles";
import {Link} from "react-router-dom";
import {Button} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const AddCampus = ({ className }) =>
    <Link className={className} to={`newcampus`}>
        <Button aria-label="Add New Campus" startIcon={<AddCircleIcon/>}
                variant="contained" color="primary" style={{marginRight: '10px'}}>
            Add New Campus
        </Button>
    </Link>
;

const AllCampusesContainer = ({ fetchAllCampuses, allCampuses, deleteCampus }) => {
    useEffect(fetchAllCampuses, [fetchAllCampuses]);
    const classes = useStyles();
    return (
        <NavigableContainer classes={classes} ActionButtonComponent={AddCampus}>
            <AllCampusesView
                campuses={allCampuses}
                deleteCampus={deleteCampus}
        />
        </NavigableContainer>
    );
};

// Map state to props;
const mapState = state => ({
    allCampuses: state.allCampuses,
});

// Map dispatch to props;
const mapDispatch = dispatch => ({
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
    deleteCampus: campusId => dispatch(deleteCampusThunk(campusId))
});

// Type check props;
AllCampusesContainer.propTypes = {
    allCampuses: PropTypes.array.isRequired,
    fetchAllCampuses: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(AllCampusesContainer);