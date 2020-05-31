import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { store, persister } from "./src/Redux/store";
import AppContainer from "./src/navigation/navigation";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <AppContainer />
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
