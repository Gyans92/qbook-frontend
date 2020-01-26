import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./styles/navbar.css";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import TypoGraphy from "@material-ui/core/Typography";
import Members from "./components/Members";
import College from "./components/College";
import Home from "./components/Home";
import Registration from "./components/Registration";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/member" component={Members} />
        <Route path="/college" component={College} />
        <Route path="/home" component={Home} />
        <Route path="/registration" component={Registration} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
