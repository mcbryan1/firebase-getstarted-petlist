import React, { Component } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import logo from "../../assets/images/logo.png";

export default class Home extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.image__container}>
          <Image source={logo} style={styles.image} />
        </View>
        <View style={styles.welcome__container}>
          <Text style={styles.welcome__container__text}>Welcome To My</Text>
          <Text style={styles.welcome__container__text}>Pet List</Text>
        </View>
        <View style={styles.get__started__container}>
          <TouchableOpacity
            style={styles.get__started__touch}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={styles.get__started}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 40,
    marginHorizontal: 40,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: "center",
  },
  welcome__container: {
    alignItems: "center",
    marginVertical: 50,
  },
  welcome__container__text: {
    fontSize: 39,
    fontWeight: "bold",
    color: "#205878",
  },
  get__started__container: {
    alignItems: "center",
    marginTop: 130,
  },
  get__started__touch: {
    borderWidth: 2,
    borderColor: "#205878",
    borderRadius: 5,
  },
  get__started: {
    fontSize: 25,
    color: "#205878",
    fontWeight: "bold",
    padding: 10,
    letterSpacing: 2,
  },
});
