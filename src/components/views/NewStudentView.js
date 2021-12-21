import {makeStyles} from '@mui/styles';
import NavigableContainer from "../containers/NavigableContainer";
import StudentForm from "../forms/StudentForm";


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


const NewStudentView = ({handleChange, handleSubmit}) => {
    const classes = useStyles();

    return (
        <NavigableContainer classes={classes}>
            <StudentForm handleChange={handleChange} handleSubmit={handleSubmit}/>
        </NavigableContainer>
    );
}

export default NewStudentView;