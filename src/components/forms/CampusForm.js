import { InputAdornment } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GenericForm, {GenericFields} from "./GenericForm";
import {memo} from "react";


const CAMPUS_ATTRIBUTES = [
    "name",
    "imageUrl",
    "address",
    "description",
];

const LOCATION_ADORNMENT =
    <InputAdornment position="start">
        <LocationOnIcon/>
    </InputAdornment>
;


const CAMPUS_PROPS = {
    name: {
        label: "Campus Name",
        required: true
    },
    imageUrl: {
        label: "Image (URL)",
        // type: "url",
    },
    address: {
        label: "Address",
        InputProps: {
            startAdornment: LOCATION_ADORNMENT
        },
        required: true,
    },
    description: {
        label: "Description",
        type: "number",
        inputProps: {
            min: 0,
            step: 0.1,
            max: 4,
        },
        multiline: true
    },
};

const CampusFields = ({disableCampus, ...props}) =>
    <GenericFields
        attributes={CAMPUS_ATTRIBUTES}
        fieldProps={CAMPUS_PROPS}
        disableFn={() => {}}
        {...props}
    />
;

const CampusForm = memo(({ campus, ...props }) =>
    <GenericForm
        formTitle={campus?.name || "New Campus"}
        {...props}
    >
        <CampusFields object={campus} frozen={props.deleteObject && !props.cancelForm}/>
    </GenericForm>
);

export default CampusForm;