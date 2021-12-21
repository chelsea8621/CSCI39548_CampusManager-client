import StudentForm from "../forms/StudentForm";
import {StudentCard} from "../cards/StudentCard";
import {CampusCard} from "../cards/CampusCard";
import GenericSingularView from "./GenericSingularView";

const StudentView = ({ student, ...props }) =>
    <GenericSingularView
        TopCardComponent={
            ({classes}) =>
                <StudentCard classes={classes} object={student} cardHeight="auto" notClickable/>
        }
        BottomCardComponent={
            ({classes}) =>
                <CampusCard classes={classes} object={student.campus} cardHeight="auto"/>
        }
        FormComponent={
            () => <StudentForm student={student} {...props}/>
        }
    />
;


export default StudentView;