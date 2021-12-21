import {useStyles} from "../Styles";
import NavigableContainer from "../containers/NavigableContainer";
import StudentForm from "../forms/StudentForm";
import {StudentCard} from "../cards/StudentCard";
import {CampusCard} from "../cards/CampusCard";

const StudentView = ({ student, cancelForm, handleChange, handleSubmit }) => {
    const classes = useStyles();
    return (
        <NavigableContainer classes={classes}>
            <div style={{
                display: "flex",
                gridGap: "10px",
            }}>
                <div style={{
                    display: "grid",
                    height: "90vh",
                    // flexWrap: "wrap",
                    gridGap: "10px"
                }}>
                    <StudentCard classes={classes} object={student} cardHeight="auto" notClickable/>
                    <CampusCard classes={classes} object={student.campus} cardHeight="auto"/>
                </div>
                <StudentForm
                    cancelForm={cancelForm}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    student={student}
                />
            </div>
        </NavigableContainer>
    );
};

export default StudentView;