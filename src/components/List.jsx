import React from "react"
import Displayitem from "./Displayitem"
export default class List extends React.Component {
  render() {
    return (
      <ul id="todo-list">
        {this.props.todos.map((todo, i) => {
          return (
            <section id="main" key={todo.id}>
              <Displayitem
                todo={todo}
                handleDone={this.props.handleDone}
                handleDelete={this.props.handleDelete.bind(null, todo.id)}
              />
            </section>
          )
        })}
      </ul>
    )
  }
}
