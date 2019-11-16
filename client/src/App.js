// Imports ========================================================================================

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Books from "./pages/Books";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";

// Components
import Nav from "./components/Nav";

// Functions ======================================================================================

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

// Export =========================================================================================

export default App;