import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Selection from "./Selection";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Navbar1 from "./Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Jelly from "./Jelly";
import Beer from "./Beer";
import Nougat from "./Nougat";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar1 />
        <Jumbotron>
          <h1>I am a vending machine</h1>
          <p>Pick whatever.</p>
        </Jumbotron>
        <Selection />
        <Route exact path="/jelly">
          <Jelly />
        </Route>
        <Route exact path="/beer">
          <Beer />
        </Route>
        <Route exact path="/nougat">
          <Nougat />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
