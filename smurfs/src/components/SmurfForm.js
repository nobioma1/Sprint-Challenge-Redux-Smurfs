import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';
import { Form } from '../styles';

const initialState = {
  name: '',
  age: '',
  height: '',
};

class SmurfForm extends Component {
  state = initialState;

  inputChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    const isValid =
      this.state.name.trim() &&
      this.state.age.trim() &&
      this.state.height.trim();
    if (isValid) {
      this.props.addSmurf({ ...this.state });
      this.setState({ ...initialState });
    }
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmitHandler}>
          <input
            placeholder="Enter Name"
            value={this.state.name}
            onChange={this.inputChangeHandler}
            name="name"
          />
          <input
            placeholder="Enter Age"
            value={this.state.age}
            onChange={this.inputChangeHandler}
            name="age"
          />
          <input
            placeholder="Enter Height"
            value={this.state.height}
            onChange={this.inputChangeHandler}
            name="height"
          />
          <button>Add Smurf</button>
        </Form>
      </div>
    );
  }
}

export default connect(
  null,
  { addSmurf },
)(SmurfForm);
