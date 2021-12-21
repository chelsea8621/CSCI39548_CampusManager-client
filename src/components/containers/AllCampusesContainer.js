import {useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {deleteCampusThunk, fetchAllCampusesThunk} from "../../store/thunks";
import {AllCampusesView} from "../views";

const AllCampusesContainer = ({ fetchAllCampuses, allCampuses, deleteCampus }) => {
    useEffect(fetchAllCampuses, [fetchAllCampuses]);
    return (
        <AllCampusesView
            campuses={allCampuses}
            deleteCampus={deleteCampus}
        />
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