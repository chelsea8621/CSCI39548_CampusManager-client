import PropTypes from "prop-types";
import {useStyles} from "../Styles";
import useWindowDimensions from "../../utils/WindowDimensions";
import {StudentCard} from "../cards/StudentCard";

const CARD_HEIGHT = 140;
const CARD_WIDTH = 1.8125 * CARD_HEIGHT;

const AllStudentsView = ({ students, deleteStudent }) => {
    const classes = useStyles();
    const { width: pageWidth } = useWindowDimensions();
    const numColumns = Math.round(Math.max(pageWidth / CARD_WIDTH, 1));

    if (!students.length) {
        return <p>There are no students.</p>;
    }

    return (
        <div style={{
            display: "inline-grid",
            gridTemplateColumns: `repeat(${numColumns}, 1fr)`,
            gridGap: "10px",
        }}>
            {students.map(student => <StudentCard
                key={student.id}
                classes={classes}
                deleteFn={deleteStudent}
                cardHeight={CARD_HEIGHT}
                object={student}/>)}
        </div>
    );
};

AllStudentsView.propTypes = {
    students: PropTypes.array.isRequired,
    deleteStudent: PropTypes.func.isRequired,
};


export default AllStudentsView;