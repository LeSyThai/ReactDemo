import React from "react";
import {Text, View} from 'react-native'
import AppNavigation from "./src/navigation";
import { Provider } from "react-redux";
import store from "./src/store/store";

function App() {
  return (
    <Provider store={store}>
      <AppNavigation/>
    </Provider>
  );
}

export default App;