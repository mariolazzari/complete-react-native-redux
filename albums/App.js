import React from "react";
import { View } from "react-native";

// components
import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";

const App = () => (
  <View>
    <Header headerText="Albums" />
    <AlbumList />
  </View>
);

export default App;
