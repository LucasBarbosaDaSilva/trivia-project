import React, { Component } from 'react';

class Login extends Component {
  state = {
    email: '',
    name: '',
    isDisable: true,
  };

  validation = () => {
    const { name, email } = this.state;
    const number = 0;
    const emailRegex = /^[\w+.]+@\w+\.com$/;
    const pass = name.length > number && emailRegex.test(email);
    this.setState({
      isDisable: !pass,
    });
  };

  handleChange = ({ target }) => {
    const { id, value } = target;
    this.setState({
      [id]: value,
    }, () => this.validation());
  };

  render() {
    const { email, name, isDisable } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="name">
            Name
            <input
              data-testid="input-player-name"
              type="text"
              id="name"
              name={ name }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              data-testid="input-gravatar-email"
              type="email"
              name={ email }
              id="email"
              onChange={ this.handleChange }
            />
          </label>

          <button
            data-testid="btn-play"
            disabled={ isDisable }
          >
            Play

          </button>
        </form>

      </div>
    );
  }
}

export default Login;