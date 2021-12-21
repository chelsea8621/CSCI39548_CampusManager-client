import PropTypes from "prop-types";
import {useStyles} from "../Styles";
import useWindowDimensions from "../../utils/WindowDimensions";
import {CampusCard} from "../cards/CampusCard";

const CARD_HEIGHT = 140;
const CARD_WIDTH = 1.8125 * CARD_HEIGHT;

const AllCampusesView = ({ campuses, deleteCampus }) => {
    const classes = useStyles();
    const { width: pageWidth } = useWindowDimensions();
    const numColumns = Math.round(Math.max(pageWidth / CARD_WIDTH, 1));
    if (!campuses.length) {
        return <p>There are no campuses.</p>;
    }
    return (
        <div style={{
            display: "inline-grid",
            gridTemplateColumns: `repeat(${numColumns}, 1fr)`,
            gridGap: "10px",
        }}>
            {campuses.map(campus => <CampusCard
                key={campus.id}
                classes={classes}
                deleteFn={deleteCampus}
                cardHeight={CARD_HEIGHT}
                object={campus}/>)}
        </div>
    );
};

AllCampusesView.propTypes = {
    campuses: PropTypes.array.isRequired,
    deleteCampus: PropTypes.func.isRequired,
};

export default AllCampusesView;