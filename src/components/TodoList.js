import React from "react";
import { Link } from "react-router-dom";

class TodoList extends React.Component {
    onSubmit = (formValues) => {
        console.log(formValues)
    }

    render() {
        return (
            <div>
                <br></br>
                <h3> Today </h3>
                <hr/>
                <div style={{ textAlign: 'right' }}>
                    <Link to="/list/create" className="large middle aligned icon plus">                 
                    <i className="large middle aligned icon plus" />
                    </Link>
                </div>
            </div>
        );
    }
};

export default TodoList;