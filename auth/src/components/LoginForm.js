import React, { Component } from "react";
import { Button, Card, CardSection, Input } from "./common/";

export class LoginForm extends Component {
  state = {
    email: "",
    password: ""
  };

  render() {
    const { email, password } = this.state;

    return (
      <Card>
        <CardSection>
          <Input
            label="eM@il"
            placeholder="mario@gmail.com"
            value={email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            placeholder="password"
            value={password}
            secureTextEntry={true}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>
        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
