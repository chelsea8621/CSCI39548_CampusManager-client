import {Button, Card, CardActions, CardContent, TextField, Typography} from "@mui/material";
import {Fragment, memo} from "react";

export const AttributeField = memo(({ object, attribute, frozen, disabled, ...props}) => {
    // unfortunate hack--
    // TextField does not update if defaultValue updates, as per TextField.shouldComponentUpdate
    // so, enforce the rendering of a new one each time, by using a named lambda,
    // which is different each time AttributeField rerenders, so the TextField to be rendered
    // is in fact a brand new component never seen before.
    // memo the AttributeField to compensate
    const InternalField = () =>
        <TextField
            name={attribute}
            defaultValue={object?.[attribute]}
            variant={!frozen ? "outlined" : "filled"}
            disabled={disabled || !!frozen}
            fullWidth
            {...props}
        />
    ;
    return <InternalField/>;
});

export const GenericFields = ({ attributes, fieldProps, object, frozen, disableFn}) =>
    <Fragment>
        {
            attributes.map(attribute =>
                <AttributeField
                    object={object}
                    attribute={attribute}
                    key={attribute}
                    frozen={frozen}
                    disabled={disableFn(attribute)}
                    {...(fieldProps?.[attribute] || {})}
                />
            )
        }
    </Fragment>
;

const GenericForm = ({ formTitle, children, deleteObject, cancelForm, handleSubmit, ...props}) =>
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
            {children}
        </CardContent>
        <CardActions sx={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
            {deleteObject ? <Button type="button" onClick={deleteObject}>Delete</Button> : null}
            {cancelForm ? <Button type="button" onClick={cancelForm}>Cancel</Button> : null}
            <Button type="submit">{deleteObject && !cancelForm ? "Edit" : "Submit"}</Button>
        </CardActions>
    </Card>
;

export default GenericForm;