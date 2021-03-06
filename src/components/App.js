import React from "react";
import { Router, Route } from "react-router-dom"
import TodoList from "./TodoList";
import TodoListCreate from "./TodoListCreate";
import history from "../history";


const App = () => {
  return (
      <div className="ui container">
          <Router history={history}>
              <div>
                  <Route path="/" exact component={TodoList} />
                  <Route path="/list/create" exact component={TodoListCreate} />
              </div>
          </Router>
      </div>
  )
};

export default App;
