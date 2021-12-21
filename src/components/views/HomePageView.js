import { useStyles } from '../Styles';
import NavigableContainer from "../containers/NavigableContainer";

const HomePageView = () => {
  const classes = useStyles();
  return (
    <NavigableContainer classes={classes}>
      <div className={classes.greeting}><h1>Home Page</h1></div>
    </NavigableContainer>
  );    
}




export default HomePageView;
