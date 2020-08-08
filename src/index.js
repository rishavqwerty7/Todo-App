import React from "react"
import ReactDOM from "react-dom"
import "./App.css"
import App from "./App"

var div = document.createElement("div")
document.body.appendChild(div)
div.setAttribute("id", "todoapp")

ReactDOM.render(<App />, div)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about servic
