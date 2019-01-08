import React, { Component } from "react";
import { ScrollView } from "react-native";
import axios from "axios";
import AlbumDetail from "./AlbumDetail";

class AlbumList extends Component {
  state = {
    albums: []
  };

  componentWillMount() {
    axios
      .get("https://rallycoding.herokuapp.com/api/music_albums")
      .then(res => this.setState({ albums: res.data }));
  }

  render() {
    const { albums } = this.state;

    return (
      <ScrollView>
        {albums.map((album, id) => (
          <AlbumDetail key={id} album={album} />
        ))}
      </ScrollView>
    );
  }
}

export default AlbumList;
