import React from "react";
import { TextInput, Text, View } from "react-native";

const Input = props => {
  const { label, value, onChangeText, placeholder, secureTextEntry } = props;
  const { containerStyle, inputStyle, labelStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}> {label} </Text>
      <TextInput
        autoCorrect={false}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={{ inputStyle }}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: "#000",
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  }
};

export default Input;
