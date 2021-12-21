import {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import NewStudentView from '../views/NewStudentView';
import {addStudentThunk} from '../../store/thunks';


class NewStudentContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectId: null
        };
    }

    handleChange = event => this.setState({
        [event.target.name]: event.target.value
    });

    handleSubmit = async event => {
        event.preventDefault();

        const { redirectId: oldRedirectId, ...student } = this.state;

        const { id: redirectId } = await this.props.addStudent(student);

        this.setState({ redirectId });
    }

    componentWillUnmount() {
        this.setState({  redirectId: null });
    }

    render() {
        if (this.state.redirectId !== null) {
            return (<Redirect to={`/student/${this.state.redirectId}`}/>)
        }
        return (
            <NewStudentView
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
            />
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return ({
        addStudent: (student) => dispatch(addStudentThunk(student)),
    })
}

export default connect(null, mapDispatchToProps)(NewStudentContainer);