import GenericSingularView from "./GenericSingularView";
import {CampusCard} from "../cards/CampusCard";
import AllStudentsView from "./AllStudentsView";
import CampusForm from "../forms/CampusForm";

const CampusView = ({ campus, deleteStudent, ...props }) =>
    <GenericSingularView
        TopCardComponent={
            ({classes}) =>
                <CampusCard classes={classes} object={campus} cardHeight="auto"/>
        }
        BottomCardComponent={
            () =>
                <AllStudentsView students={campus.students} deleteStudent={deleteStudent}/>
                // <StudentCard classes={classes} object={student} cardHeight="auto" notClickable/>
        }
        FormComponent={
            () => <CampusForm campus={campus} {...props}/>
        }
    />
;

export default CampusView;