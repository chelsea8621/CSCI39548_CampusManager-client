import React, {useEffect, useState} from "react";
import NavigableContainer from "./NavigableContainer";
import {useStyles} from "../Styles";

const GenericSingularContainer = ({
    object,
    fetchObject,
    editObject,
    deleteObject,
    ActionButtonComponent = () => null,
    ViewComponent
}) => {
    const classes = useStyles();
    const [cancelForm, setCancelForm] = useState(null);

    useEffect(() => fetchObject(), []);

    const handleSubmit = async event => {
        event.preventDefault();
        if (cancelForm) {
            const data = Object.fromEntries(new FormData(event.target).entries());
            for (const key in data) {
                const v = data[key];
                if (v === null || v === undefined ||
                    !(v?.toString()?.replace(// empty or whitespace
                        /\s/g, "")?.length)) {
                    delete data[key]; // delete keys that shouldn't be sent
                }
            }

            await editObject({...data, id: object.id});
            cancelForm(event);
        } else {
            setCancelForm(() => () => setCancelForm(null));
        }
    };

    return (
        <NavigableContainer classes={classes} ActionButtonComponent={ActionButtonComponent}>
            <ViewComponent
                deleteObject={deleteObject}
                cancelForm={cancelForm}
                handleSubmit={handleSubmit}
            />
        </NavigableContainer>
    );
}

export default GenericSingularContainer;