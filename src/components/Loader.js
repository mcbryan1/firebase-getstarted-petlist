import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import BouncingPreloader from "react-native-bouncing-preloader";

export default class Loader extends Component {
  render() {
    return (
        <BouncingPreloader
          icons={[
            "https://www.shareicon.net/data/256x256/2016/05/04/759946_bar_512x512.png",
            require("../../assets/images/logo.png"),
          ]}
          leftRotation="-680deg"
          rightRotation="360deg"
          leftDistance={-180}
          rightDistance={-250}
          speed={1200}
        />
    );
  }
}

const styles = StyleSheet.create({});
