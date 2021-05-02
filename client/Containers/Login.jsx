import React, { Component } from 'react';
import { FormGroup, Label, Input } from '../components/styles/Forms';
import Button from '../components/styles/Button';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  onChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  onSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.signIn({
      email,
      password,
    });
  };

  render() {
    const { onChange, onSubmit } = this;
    const { email, password } = this.state;
    return (
      <>
        <h2>Welcome Back!</h2>
        <FormGroup>
          <form onSubmit={onSubmit}>
            <Label>email:</Label>
            <Input value={email} onChange={onChange} name="email" />
            <br />
            <Label>Password:</Label>
            <Input
              value={password}
              onChange={onChange}
              type="password"
              name="password"
            />
            <br />
            <Button>Log In</Button>
          </form>
        </FormGroup>
      </>
    );
  }
}

export default Login;
