import NavigableContainer from "../containers/NavigableContainer";
import {useStyles} from "../Styles";

const CampusView = (props) => {
    const {campus} = props;
    const classes = useStyles();
    return (
        <NavigableContainer classes={classes}>
            <h1>{campus.name}</h1>
            <p>{campus.address}</p>
            <p>{campus.description}</p>
            <ul>
                {campus.students.map(student => {
                    let name = student.firstname + " " + student.lastname;
                    return (
                        <li key={student.id}>{name}</li>
                    );
                })}
            </ul>
        </NavigableContainer>
    );

};

export default CampusView;