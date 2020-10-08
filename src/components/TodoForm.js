import React, {Component} from 'react'

const initialState = {
  title: '',
  content: ''
}

export default class TodoForm extends Component {

  state = initialState

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value 
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addTodo(this.state)

    this.setState(initialState)
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Title</label>
        <input name="title" value={this.state.title} onChange={this.handleChange} />
        <label>Content</label>
        <input name="content" value={this.state.content} onChange={this.handleChange} />
        <input type="submit" />
      </form>
    )
  }
}

