import React from "react";
import "./App.css";
import Create from "./components/create";
import Read from "./components/read";
import Update from "./components/update";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Button } from "semantic-ui-react";

function App() {
  return (
    <BrowserRouter>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
        rel="stylesheet"
      />
      <div className="main">
        <div className="formBack">
          <h2 className="main-header">React Crud Operations</h2>
          <Routes>
            <Route exact path="/create" element={<Create />} />
            <Route exact path="/read" element={<Read />} />
            <Route path="/update" element={<Update />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
