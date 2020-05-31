import React from "react";
import { StyleSheet, View } from "react-native";
import Login from "../screen/Login";
import SignUp from "../screen/Signup";
import PetPageScreen from "../screen/PetPageScreen";
import Home from "../screen/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SimpleLineIcons } from "@expo/vector-icons";
import { logout } from "../Redux/Actions/authActions";

const Stack = createStackNavigator();
function AppContainer({ auth, logout }) {
  return (
    <NavigationContainer>
      {auth.login ? (
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 25,
                letterSpacing: 3,
              },
              headerTitleAlign: "center",
              headerTintColor: "whitesmoke",
              headerStyle: {
                backgroundColor: "#205878",
                height: 100,
              },
              title: "My Pet List",
              headerRight: () => (
                <TouchableOpacity onPress={logout}>
                  <SimpleLineIcons
                    name="logout"
                    size={24}
                    color="white"
                    style={styles.icon}
                  />
                </TouchableOpacity>
              ),
            }}
            name="PetList"
            component={PetPageScreen}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerTitle: null,
              headerStyle: { height: 0 },
            }}
            name="HomePage"
            component={Home}
          />
          <Stack.Screen
            options={{
              headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 25,
                letterSpacing: 4,
              },
              headerTitleAlign: "center",
              headerTintColor: "whitesmoke",
              headerStyle: {
                backgroundColor: "#205878",
                height: 100,
              },
              title: "Login",
            }}
            name="Login"
            component={Login}
          />
          <Stack.Screen
            options={{
              headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 25,
                letterSpacing: 4,
              },
              headerTitleAlign: "center",
              headerTintColor: "whitesmoke",
              headerStyle: {
                backgroundColor: "#205878",
                height: 100,
              },
              title: "Sign Up",
            }}
            name="SignUp"
            component={SignUp}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  icon: {
    fontWeight: "bold",
    marginRight: 20,
  },
});

const mapStateToProp = (state) => {
  return { auth: state };
};
export default connect(mapStateToProp, { logout })(AppContainer);
