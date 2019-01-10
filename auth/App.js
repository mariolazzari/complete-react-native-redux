import React from "react";
import firebase from "firebase";

import { StyleSheet, View } from "react-native";
import { Header, Button, Spinner } from "./src/components/common";
import LoginForm from "./component/LoginForm";

export default class App extends React.Component {
  state = {
    loggedIn: null
  };

  componentWillMount = () => {
    firebase.initializeApp({
      apiKey: "AIzaSyDgDJ1r2ujl0Jlpiv5dbakJnjl60JOzYjk",
      authDomain: "auth-3462a.firebaseapp.com",
      databaseURL: "https://auth-3462a.firebaseio.com",
      projectId: "auth-3462a",
      storageBucket: "",
      messagingSenderId: "999639358212"
    });

    firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.setState({loggedIn:true})
      }
      else{
        this.setState({loggedIn::false})
      }
    });
  };

  renderContent = () =>{
    const {loggedIn} = this.state;

    switch(loggedIn){
      case true:
        return <Button onPress={firebase.auth().signOut()}>Log out</Button>
      case false:
        return <LoginForm/>
      default:
        return <Spinner size="large"/>
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
