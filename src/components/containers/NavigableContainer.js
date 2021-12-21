import ApplicationNavBar from "../ApplicationNavBar";

const NavigableContainer = ({classes, children, ActionButtonComponent = () => null}) => {
    return (
        <div className={classes.root}>
            <ApplicationNavBar classes={classes} ActionButtonComponent={ActionButtonComponent}/>
            {children}
        </div>
    )
}

export default NavigableContainer;