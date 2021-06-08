import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import store from "./redux/store";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <div className="App">
        <Provider store={store}>
            <MainLayout />
        </Provider>
    </div>
  );
}

export default App;
