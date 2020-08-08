import React from "react"
import del from "./del.png"
export default class Displayitem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false,
      changedText: this.props.todo.title,
    }
  }

  componentDidMount() {
    this.setState({ changedText: this.props.todo.title })
  }

  handleEdit = (e) => {
    this.setState({ editing: true, changedText: this.props.todo.title })
  }

  handleEditDone = (e) => {
    if (e.keyCode === 13) {
      this.setState({ editing: false })
    }
  }

  handleEditingChange(event) {
    var _changedText = event.target.value
    this.setState({ changedText: _changedText })
  }

  render() {
    var todo = this.props.todo
    var title = todo.title
    var viewStyle = {}
    var editStyle = {}

    if (this.state.editing) {
      viewStyle.display = "none"
    } else {
      editStyle.display = "none"
    }
    return (
      <li className={todo.done ? "done" : ""} onDoubleClick={this.handleEdit}>
        <div style={viewStyle}>
          <input
            type="checkbox"
            style={{ fontSize: "x-large" }}
            onChange={this.props.handleDone.bind(null, todo.id)}
            checked={todo.done}
          />
          <label>{this.state.changedText}</label>

          <a
            href="#"
            className="destroy"
            onClick={this.props.handleDelete.bind(null, todo.id)}
          >
            <img src={del} height="25px" width="27px" alt="" />
          </a>
        </div>
        <input
          type="text"
          style={editStyle}
          onKeyDown={this.handleEditDone}
          onChange={this.handleEditingChange.bind(this)}
          value={this.state.changedText}
        />
        <hr />
      </li>
    )
  }
}
