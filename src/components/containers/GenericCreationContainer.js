import {useEffect, useState} from "react";
import {Redirect} from "react-router-dom";
import NavigableContainer from "./NavigableContainer";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(() => ({
    formContainer: {
        width: '500px',
        backgroundColor: '#f0f0f5',
        borderRadius: '5px',
        margin: 'auto',
    },
    title: {
        flexGrow: 1,
        textAlign: 'left',
        textDecoration: 'none'
    },
    customizeAppBar: {
        backgroundColor: '#11153e',
        shadows: ['none'],
    },
    formTitle: {
        backgroundColor: '#c5c8d6',
        marginBottom: '15px',
        textAlign: 'center',
        borderRadius: '5px 5px 0px 0px',
        padding: '3px'
    },
    labelStyle: {
        color: '#11153e',
        fontWeight: 'bold'
    },
}));


const GenericCreationContainer = ({ addObject, objectType, ViewComponent }) => {
    const classes = useStyles();
    const [redirectId, setRedirectId] = useState(null);
    useEffect(() => () => setRedirectId(null), [setRedirectId]);

    const handleSubmit = async event => {
        event.preventDefault();
        const data = Object.fromEntries(new FormData(event.target).entries());
        for (const key in data) {
            const v = data[key];
            if (v === null || v === undefined ||
                !(v?.toString()?.replace(// empty or whitespace
                    /\s/g, "")?.length)) {
                delete data[key]; // delete keys that shouldn't be sent
            }
        }
        if ("firstname" in data)
            data.campusId = data.campusId || new URLSearchParams(document.location.search).get("campusId");

        const { id } = await addObject(data);

        setRedirectId(id);
    };


    if (redirectId !== null) {
        return (<Redirect to={`/${objectType}/${redirectId}`}/>)
    }
    return (
        <NavigableContainer classes={classes}>
            <ViewComponent handleSubmit={handleSubmit}/>
        </NavigableContainer>);
};

export default GenericCreationContainer;