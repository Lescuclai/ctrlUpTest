import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" />
          <Route path="*" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
