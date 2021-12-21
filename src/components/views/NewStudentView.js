import StudentForm from "../forms/StudentForm";
import GenericCreationView from "./GenericCreationView";

const NewStudentView = ({ handleSubmit, campusId }) =>
    <GenericCreationView
        FormComponent={props =>
            <StudentForm student={{campusId}} disableCampus={campusId !== undefined && campusId !== null} {...props}/>
        }
        handleSubmit={handleSubmit}
    />
;

export default NewStudentView;