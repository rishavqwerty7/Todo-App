import React from "react"
import List from "./List"
import { Button } from "@material-ui/core"
var rand = require("random-key")

export default class Todo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      todos: [],
    }
  }

  handleChange = (e) => {
    var title = e.target.value
    this.setState({
      title: title,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    var title = this.state.title
    var newTodos = this.state.todos.concat({
      title: title,
      id: rand.generate(),
      done: false,
    })
    this.setState({
      title: "",
      todos: newTodos,
    })
  }

  handleDone(idtobrmarkedasDone) {
    var _todos = this.state.todos
    var todo = _todos.filter((todo) => {
      return todo.id === idtobrmarkedasDone
    })[0]

    todo.done = !todo.done

    this.setState({ todos: _todos })
  }

  handleDelete(idToBeDeleted) {
    var newTodos = this.state.todos.filter((todo) => {
      return todo.id !== idToBeDeleted
    })

    this.setState({ todos: newTodos })
  }

  handleClearCompleted = (event) => {
    var newTodos = this.state.todos.filter((todo) => {
      return !todo.done
    })
    this.setState({ todos: newTodos })
  }

  render() {
    return (
      <div>
        <h2 style={{ textAlign: "center" }}>MAKE YOUR OWN TODO!</h2>
        <form>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.title}
            style={{
              width: 380,
              boxShadow: "5px 10px  #a0cffc",
              marginBottom: "20px",
            }}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ position: "absolute", boxShadow: "4px 8px  #a0cffc" }}
            onClick={this.handleSubmit}
          >
            Add
          </Button>
          <div>
            <small>Tap Doubleclick to Edit</small>
          </div>
        </form>

        <List
          todos={this.state.todos}
          handleDone={this.handleDone.bind(this)}
          handleDelete={this.handleDelete.bind(this)}
        />

        <footer>
          <pre>
            All {this.state.todos.length}| Completed:{" "}
            {
              this.state.todos.filter((todo) => {
                return todo.done
              }).length
            }
            | pending:{" "}
            {
              this.state.todos.filter((todo) => {
                return !todo.done
              }).length
            }{" "}
            |
            <a
              href="#"
              onClick={this.handleClearCompleted}
              style={{ textDecoration: "none", color: "red" }}
            >
              clear completed
            </a>
          </pre>
        </footer>
        <br />
        <div>
          <small>Designed by Rishav Raj</small>
        </div>
      </div>
    )
  }
}
