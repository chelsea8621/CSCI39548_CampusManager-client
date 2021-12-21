import {
    Button,
    Card,
    CardActions,
    CardContent,
    InputAdornment,
    TextField,
    Typography
} from "@mui/material";
import {memo} from "react";
import {AccountCircle} from "@mui/icons-material";

const ValidatableField = ({disabled, onChange, ...props}) => {
    return <TextField
        variant={!!onChange ? "outlined" : "filled"}
        disabled={disabled || !onChange}
        onChange={onChange} {...props}/>;
}

const StudentForm = memo((
    {
        handleChange,
        handleSubmit,
        student,
        disableCampus,
        cancelForm,
        ...props
    }) => {
    const CampusField = () =>
        <ValidatableField
            label="Campus ID" name="campusId" defaultValue={student?.campusId} onChange={handleChange}
            type="number" inputProps={{min: 0, step: 1}} disabled={disableCampus} required={!disableCampus} fullWidth/>;
    const FirstNameField = () =>
        <ValidatableField
            label="First Name" name="firstname"
            defaultValue={student?.firstname}
            onChange={handleChange}
            InputProps={{startAdornment}}
            required fullWidth/>;
    const LastNameField = () =>
        <ValidatableField
            label="Last Name" name="lastname"
            defaultValue={student?.lastname}
            onChange={handleChange}
            InputProps={{startAdornment}}
            required fullWidth/>;
    const EmailField = () =>
        <ValidatableField
            label="Email" name="email"
            defaultValue={student?.email}
            onChange={handleChange}
            type="email" required fullWidth/>;
    const ImageUrlField = () =>
        <ValidatableField
            label="Image (URL)" name="imageUrl"
            defaultValue={student?.imageUrl}
            onChange={handleChange}
            fullWidth/>;
    const GPAField = () =>
        <ValidatableField
            label="GPA" name="gpa"
            defaultValue={student?.gpa}
            onChange={handleChange}
            type="number" inputProps={{min: 0, step: 0.1, max: 4}} fullWidth/>;


    const startAdornment = (
        <InputAdornment position="start">
            <AccountCircle/>
        </InputAdornment>
    );

    const formTitle = student ? `${student.firstname} ${student.lastname}` : "New Student";

    return (
        <Card component="form" autoComplete="off" onSubmit={handleSubmit} {...props}>
            <CardContent sx={{display: "flex", flexWrap: "wrap", justifyContent: "center", gridGap: "1em"}}>
                <Button color="primary" disabled>
                    <Typography style={{
                        fontWeight: 'bold',
                        fontFamily: 'Arial, sans-serif',
                        fontSize: '20px',
                        color: '#11153e'
                    }}>
                        {formTitle}
                    </Typography>
                </Button>
                <FirstNameField/>
                <LastNameField/>
                <EmailField/>
                <ImageUrlField/>
                <GPAField/>
                <CampusField/>
            </CardContent>
            <CardActions sx={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
                { cancelForm ? <Button type="button" onClick={cancelForm}>Cancel</Button> : null }
                <Button type="submit">{handleChange ? "Submit" : "Edit"}</Button>
            </CardActions>
        </Card>
    );
});

export default StudentForm;