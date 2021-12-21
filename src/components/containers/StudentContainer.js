import React, { Component } from "react";
import { connect } from "react-redux";
import { editStudentThunk, fetchStudentThunk } from "../../store/thunks";
import { StudentView } from "../views";

class StudentContainer extends Component {
    handleChange = event => this.setState(prevState => ({
        editedStudent: {
            ...prevState.editedStudent,
            [event.target.name]: event.target.value
        }
    }));


    cancelFrom = event => this.setState({
        editedStudent: {},
        cancelForm: null,
        handleChange: null
    });

    handleSubmit = async event => {
        event.preventDefault();
        if (this.state?.handleChange) { // submit button
            // do the submission
            await this.props.editStudent({
                ...this.state.editedStudent,
                id: this.props.student.id
            });
            this.cancelFrom(event);
        } else { // its the edit button
            this.setState({
                editedStudent: {},
                cancelForm: this.cancelFrom,
                handleChange: this.handleChange // set handleChange to actually do things
            });
        }
    }

    componentDidMount() {
        this.props.fetchStudent(this.props.match.params.id);
    }

    render() {
        return (
            <StudentView
                student={this.props.student}
                cancelForm={this.state?.cancelForm}
                handleChange={this.state?.handleChange}
                handleSubmit={this.handleSubmit}
            />
        );
    }
}

// map state to props
const mapState = state => {
    return {
        student: state.student,
    };
};

// map dispatch to props
const mapDispatch = dispatch => {
    return {
        fetchStudent: id => dispatch(fetchStudentThunk(id)),
        editStudent: student => dispatch(editStudentThunk(student))
    };
};

export default connect(mapState, mapDispatch)(StudentContainer);