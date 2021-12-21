import HomePageView from '../views/HomePageView';
import NavigableContainer from "./NavigableContainer";
import {useStyles} from "../Styles";

const HomePageContainer = () => {
    const classes = useStyles();
    return (
        <NavigableContainer classes={classes}>
            <HomePageView/>
        </NavigableContainer>
    );
};

export default HomePageContainer;