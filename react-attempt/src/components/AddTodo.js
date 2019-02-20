import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
  state = {
    title: ''
  }

  onSubmit = (submit) => {
    submit.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  }

  // [input.target.name] refers to the name of the property of state. so if there was more than just a title field, using the target.name in brackets will provide a value for each of those names
  onChange = (input) => this.setState({ [input.target.name]: input.target.value});

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
          <input 
            type="text"
            name='title'
            placeholder='Add Todo...'
            style={{ flex: '10', padding: '5px' }}
            value={ this.state.title }
            onChange={ this.onChange }
          />
          <input 
            type="submit" 
            value="submit"
            className="btn"
            style={{ flex: '1' }}
          />
        </form>
      </div>
    )
  }
}

// PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.object.isRequired
}

export default AddTodo
