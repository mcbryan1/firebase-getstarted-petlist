import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { connect } from "react-redux";
import { registrationForm, registerError } from "../Redux/Actions/authActions";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      confirm: "",
    };
  }

  handleUpdateState = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  handleOnSubmit = () => {
    if (this.state.password !== this.state.confirm) {
      this.props.registerError("Error (Password Mismatch)")
      return;
    }
    this.props.registrationForm(this.state.email, this.state.password)
  };
  render() {
    const { navigation, auth } = this.props;
    return (
      <ScrollView>
        <View style={styles.container}>
          {/* Inputs */}
          <View style={styles.input__container}>
            {auth.error.register && (
              <Text style={{ color: "red" }}>{auth.error.register}</Text>
            )}
            <TextInput
              placeholderTextColor="#aaaaaa"
              placeholder="Username"
              onChangeText={(text) => {
                this.handleUpdateState("username", text);
              }}
              value={this.state.username}
              style={styles.input__field}
            />

            <TextInput
              placeholderTextColor="#aaaaaa"
              placeholder="Email"
              onChangeText={(text) => {
                this.handleUpdateState("email", text);
              }}
              value={this.state.email}
              style={styles.input__field}
            />

            <TextInput
              placeholderTextColor="#aaaaaa"
              placeholder="Password"
              onChangeText={(text) => {
                this.handleUpdateState("password", text);
              }}
              value={this.state.password}
              secureTextEntry={true}
              style={styles.input__field}
            />

            <TextInput
              placeholderTextColor="#aaaaaa"
              placeholder="Repeat Password"
              onChangeText={(text) => {
                this.handleUpdateState("confirm", text);
              }}
              value={this.state.confirm}
              secureTextEntry={true}
              style={styles.input__field}
            />
          </View>

          {/* Button */}
          <View style={styles.button__container}>
            <TouchableOpacity
              onPress={this.handleOnSubmit}
              style={styles.button}
            >
              <Text style={styles.button__text}>Sign up</Text>
            </TouchableOpacity>
          </View>

          {/* !Account */}
          <View style={styles.account__container}>
            <Text style={styles.account__container__text1}>
              Already have account?
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Text style={styles.account__container__text2}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    marginVertical: 40,
  },
  signup__container: {
    marginBottom: 20,
  },
  signup__container__text: {
    fontSize: 35,
    color: "#205878",
  },
  input__container: {
    marginVertical: 50,
  },
  input__field: {
    fontSize: 20,
    borderBottomWidth: 2,
    height: 60,
    borderBottomColor: "#205878",
  },
  button__container: {
    marginVertical: 50,
  },
  button: {
    backgroundColor: "#205878",
    borderRadius: 5,
  },
  button__text: {
    fontSize: 20,
    color: "white",
    padding: 10,
    alignSelf: "center",
    fontWeight: "bold",
  },
  account__container: {
    flexDirection: "row",
    fontSize: 25,
    justifyContent: "space-between",
  },
  account__container__text2: {
    marginLeft: 10,
    color: "#205878",
    fontSize: 17,
    fontWeight: "bold",
  },
  account__container__text1: {
    fontSize: 17,
  },
});

const mapStateToProp = (state) => {
  return { auth: state };
};
export default connect(mapStateToProp, { registrationForm, registerError })(
  Signup
);
