import {useStyles} from "../Styles";

const GenericSingularView = ({ TopCardComponent, BottomCardComponent, FormComponent }) => {
    const classes = useStyles();
    return (
        <div style={{
            display: "flex",
            gridGap: "10px",
        }}>
            <div style={{
                display: "grid",
                height: "90vh",
                // flexWrap: "wrap",
                gridGap: "10px"
            }}>
                <TopCardComponent classes={classes}/>
                <BottomCardComponent classes={classes}/>
            </div>
            <FormComponent/>
        </div>
    );
};

export default GenericSingularView;