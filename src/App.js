import React from "react";

import Chat from "./components/Chat";
import Join from "./components/Join";

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => (
  <Router>
    <Route exact path="/" component={Join} />
    <Route path="/chat" component={Chat} />
  </Router>
);

export default App;
