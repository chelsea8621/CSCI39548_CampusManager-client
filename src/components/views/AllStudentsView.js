import PropTypes from "prop-types";
import {useStyles} from "../Styles";
import NavigableContainer from "../containers/NavigableContainer";
import useWindowDimensions from "../../utils/WindowDimensions";
import {StudentCard} from "../cards/StudentCard";
import {Button, Card, CardActions} from '@mui/material';
import {Link} from "react-router-dom";
import AddCircleIcon from '@mui/icons-material/AddCircle';

const CARD_HEIGHT = 140;
const CARD_WIDTH = 1.8125 * CARD_HEIGHT;

const NewStudent = () => {
    return (
        <Card raised>
            <CardActions>
                <Link to={`newstudent`}>
                    <Button aria-label="Add New Student" startIcon={<AddCircleIcon/>}>
                        Add New Student
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
}

const AllStudentsView = ({ students, deleteStudent }) => {
    const classes = useStyles();
    const { width: pageWidth } = useWindowDimensions();
    const numColumns = Math.round(Math.max(pageWidth / CARD_WIDTH, 1));

    if (!students.length) {
        return (
            <NavigableContainer classes={classes}>
                <p>There are no students.</p>
                <div style={{
                    display: "inline-grid",
                    gridTemplateColumns: `repeat(${numColumns}, 1fr)`,
                    gridGap: "10px",
                }}>
                    <NewStudent/>
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
                <NewStudent classes={classes}/>
                {students.map(student => <StudentCard
                    key={student.id}
                    classes={classes}
                    deleteFn={deleteStudent}
                    cardHeight={CARD_HEIGHT}
                    object={student}/>)}
            </div>
        </NavigableContainer>
    );
};

AllStudentsView.propTypes = {
    students: PropTypes.array.isRequired,
    deleteStudent: PropTypes.func.isRequired,
};


export default AllStudentsView;