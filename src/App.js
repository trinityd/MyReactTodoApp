import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
import { v4 as uuid } from "uuid";
import axios from "axios";

import "./App.css";

class App extends Component {
  state = {
    todos: [
      // ******* Hardcoded ********
      // {
      //   id: uuid(),
      //   title: "Take out the trash",
      //   completed: false,
      // },
      // {
      //   id: uuid(),
      //   title: "Dinner w/ friends",
      //   completed: false,
      // },
      // {
      //   id: uuid(),
      //   title: "Meeting with boss",
      //   completed: false,
      // },
      // {
      //   id: uuid(),
      //   title: "Do the dishes",
      //   completed: false,
      // },
    ],
  };

  componentDidMount() {
    axios
      .get("http://jsonplaceholder.typicode.com/todos?_limit=8")
      .then((res) => {
        this.setState({ todos: res.data });
      });
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  // Delete Todo
  delTodo = (id) => {
    // ******* Hardcoded ********
    // this.setState({
    //   todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    // });

    // Fake Delete
    axios
      .delete(`http://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => {
        this.setState({
          todos: [...this.state.todos.filter((todo) => todo.id !== id)],
        });
      });
  };

  // Add Todo
  addTodo = (title) => {
    // ******* Hardcoded ********
    // const newTodo = {
    //   id: uuid(),
    //   title,
    //   completed: false
    // }
    // this.setState({ todos: [...this.state.todos, newTodo]})

    // Fake Post
    axios.post("http://jsonplaceholder.typicode.com/todos", {}).then((res) => {
      res.data.title = title;
      res.data.id = uuid();
      res.data.completed = false;
      this.setState({ todos: [...this.state.todos, res.data] });
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />

            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />

            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
