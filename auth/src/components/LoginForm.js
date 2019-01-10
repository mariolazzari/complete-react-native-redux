import React, { Component } from "react";
import { Text } from "react-native";
import { firebase } from "firebase";
import { Button, Card, CardSection, Input, Spinner } from "./common/";

export class LoginForm extends Component {
  state = {
    email: "",
    password: "",
    error: "",
    loading: false
  };

  onButtonPress = () => {
    const { email, password } = this.state;
    this.setState({ error: "", loading: true });

    firebase
      .auth()
      .singInWithEmailAndPassword(email, password)
      .then(() => this.onLoginSuccess())
      .catch(() =>
        firebase
          .createUserWithEmailAndPassword(email, password)
          .then(() => this.onLoginSuccess())
          .catch(() => this.onLoginFailed())
      );
  };

  onLoginSuccess = () => {
    this.setState({ email: "", password: "", error: "", loading: false });
  };

  onLoginFailed = () => {
    this.setState({ error: "Login failed", loading: false });
  };

  renderButton() {
    const { loading } = this.state;

    if (loading) {
      return <Spinner size="small" />;
    }

    return <Button onPress={this.onButtonPress}>Login</Button>;
  }

  render() {
    const { email, password, error } = this.state;
    const { errorTextStyle } = styles;

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

        <Text style={errorTextStyle}>{error}</Text>

        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: "center",
    color: "red"
  }
};

export default LoginForm;
