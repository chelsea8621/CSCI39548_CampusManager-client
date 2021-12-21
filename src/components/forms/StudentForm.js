import { InputAdornment } from "@mui/material";
import {AccountCircle} from "@mui/icons-material";
import GenericForm, {GenericFields} from "./GenericForm";
import {memo} from "react";


const STUDENT_ATTRIBUTES = [
    "firstname",
    "lastname",
    "email",
    "imageUrl",
    "gpa",
    "campusId"
];

const PROFILE_ADORNMENT =
    <InputAdornment position="start">
        <AccountCircle/>
    </InputAdornment>
;


const STUDENT_PROPS = {
    firstname: {
        label: "First Name",
        InputProps: {
            startAdornment: PROFILE_ADORNMENT
        },
        required: true
    },
    lastname: {
        label: "Last Name",
        InputProps: {
            startAdornment: PROFILE_ADORNMENT
        },
        required: true
    },
    email: {
        label: "Email",
        type: "email",
        required: true,
    },
    imageUrl: {
        label: "Image (URL)",
        // type: "url",
    },
    gpa: {
        label: "GPA",
        type: "number",
        inputProps: {
            min: 0,
            step: 0.1,
            max: 4,
        }
    },
    campusId: {
        label: "Campus ID",
        type: "number",
        inputProps: {
            min: 0,
            step: 1,
        },
        required: true,
    },
};

const StudentFields = ({disableCampus, ...props}) =>
    <GenericFields
        attributes={STUDENT_ATTRIBUTES}
        fieldProps={STUDENT_PROPS}
        disableFn={disableCampus ? attribute => attribute === "campusId" : () => {}}
        {...props}
    />
;

const StudentForm = memo(({ student, disableCampus, ...props }) =>
    <GenericForm
        formTitle={student?.firstname || student?.lastname ? `${student.firstname} ${student.lastname}` : "New Student"}
        {...props}
    >
        <StudentFields object={student} frozen={props.deleteObject && !props.cancelForm} disableCampus={disableCampus}/>
    </GenericForm>
);

export default StudentForm;