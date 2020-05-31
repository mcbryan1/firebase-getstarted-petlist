import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import store from './src/Redux/store'
import AppContainer from "./src/navigation/navigation";



export default function App() {
  return (
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
