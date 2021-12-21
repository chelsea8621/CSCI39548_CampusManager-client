import ApplicationNavBar from "../ApplicationNavBar";

const NavigableContainer = ({classes, children}) => {
    return (
        <div className={classes.root}>
            <ApplicationNavBar classes={classes}/>
            {children}
        </div>
    )
}

export default NavigableContainer;