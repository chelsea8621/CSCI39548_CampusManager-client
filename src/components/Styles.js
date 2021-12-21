import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        textAlign: 'left',
        fontType: 'bold',
        fontFamily: 'Courier, sans-serif',
        fontSize: '35px',
        color: '#CDDC39'
    },
    appBar:{
        backgroundColor: '#11153e',
        shadows: ['none'],
    },
    greeting:{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: "50%",
        margin: "auto",
    },
    links:{
        textDecoration: 'none',
    }

}));

export { useStyles };
