import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';
import MyProfile from './pages/MyProfile';

const App = () => (
  <>
    <Router>
      <Navbar />
      <Switch>
        <div className="App">
          <Route exact path="/" component={Rockets} />
          <Route
            path="/missions"
            component={Missions}
          />
          |
          <Route
            path="/my-profile"
            component={MyProfile}
          />
        </div>
      </Switch>
    </Router>
  </>
);

export default App;
