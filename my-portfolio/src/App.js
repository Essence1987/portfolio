import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />
        {/* Define your routes and components here */}
        <Switch>
          {/* Add routes for About Me, Portfolio, Contact, and Resume */}
          <Route path="/" exact component={AboutMe} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
