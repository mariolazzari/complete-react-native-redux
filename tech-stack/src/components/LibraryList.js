import React, { Component } from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";

class LibraryList extends Component {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    libraries: state.libraries
  };
};

export default connect(mapStateToProps)(LibraryList);
