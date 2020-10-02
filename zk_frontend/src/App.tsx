import React from "react";
import logo from "./logo.svg";
import { Link, Switch, Route } from "react-router-dom";
import "./App.css";
import Profile from "./profile/Profile";
import Home from "./home/Home";
import Editor from "./editor/Editor";

const App: React.FC = () => (
  <>
    <Switch>
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/" component={Home} />
      <Route exact path="/editor" component={Editor} />
    </Switch>
  </>
);

export default App;
