import React from "react";
import { Field, reduxForm } from 'redux-form';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';



class TodoListForm extends React.Component {

    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            );
        }
    }

    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

        return (
            <div className={className}>
                <label> {label} </label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        )
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error" >
                <Field name='description' component={this.renderInput} label="Enter Description" />
                
                <button className="ui button green"> save</button>
                <Link to="/">
                    <button className="ui button "> cancel</button>
                </Link>
            </form>
        )
    }
}

const validate = (formValues) => {
    const errors = {};

    if (!formValues.description) {
        errors.description = 'You must enter a description';
    }
    return errors;
}

export default reduxForm({
    form: 'TodoListForm',
    validate: validate
})(TodoListForm);
