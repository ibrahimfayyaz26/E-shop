import React from "react";
import { LogBox } from "react-native";

import store from "./store/store";
import { Provider } from "react-redux";

//Navigators
import Main from "./Navgation/Main";

LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
