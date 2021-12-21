import { useStyles } from '../Styles';

const HomePageView = () => {
    const classes = useStyles();
    return <div className={classes.greeting}><h1>Home Page</h1></div>;
}




export default HomePageView;
