import React from "react";

import "./App.css";
import Card from "./Components/Card";
import WordContextProvider from "../store/WordContext";

function App() {
  return (
    <WordContextProvider>
      <div className="app-container container">
        <Card />
      </div>
    </WordContextProvider>
  );
}

export default App;
