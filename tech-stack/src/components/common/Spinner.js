import React from "react";
import { View, ActivityIndicator } from "react-native";

const Spinner = props => {
  const { size } = props;

  return (
    <View>
      <ActivityIndicator size={size || "large"} />
    </View>
  );
};

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContet: "center",
    alignItems: "center"
  }
};

export default Spinner;
