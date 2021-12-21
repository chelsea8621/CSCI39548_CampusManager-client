import PropTypes from "prop-types";
import {useStyles} from "../Styles";
import NavigableContainer from "../containers/NavigableContainer";
import useWindowDimensions from "../../utils/WindowDimensions";
import {CampusCard} from "../cards/CampusCard";
import {Button, Card, CardActions} from "@mui/material";
import {Link} from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const CARD_HEIGHT = 140;
const CARD_WIDTH = 1.8125 * CARD_HEIGHT;

const NewCampus = () => {
    return (
        <Card raised>
            <CardActions>
                <Link to={`newcampus`}>
                    <Button aria-label="Add New Campus" startIcon={<AddCircleIcon/>}>
                        Add New Campus
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
}


const AllCampusesView = ({ campuses, deleteCampus }) => {
    const classes = useStyles();
    const { width: pageWidth } = useWindowDimensions();
    const numColumns = Math.round(Math.max(pageWidth / CARD_WIDTH, 1));
    if (!campuses.length) {
        return (
            <NavigableContainer classes={classes}>
                <p>There are no campuses.</p>
                <div style={{
                    display: "inline-grid",
                    gridTemplateColumns: `repeat(${numColumns}, 1fr)`,
                    gridGap: "10px",
                }}>
                    <NewCampus/>
                </div>
            </NavigableContainer>
        );
    }
    return (
        <NavigableContainer classes={classes}>
            <div style={{
                display: "inline-grid",
                gridTemplateColumns: `repeat(${numColumns}, 1fr)`,
                gridGap: "10px",
            }}>
                <NewCampus/>
                {campuses.map(campus => <CampusCard
                    key={campus.id}
                    classes={classes}
                    deleteFn={deleteCampus}
                    cardHeight={CARD_HEIGHT}
                    object={campus}/>)}
            </div>
        </NavigableContainer>
    );
};

AllCampusesView.propTypes = {
    campuses: PropTypes.array.isRequired,
    deleteCampus: PropTypes.func.isRequired,
};

export default AllCampusesView;