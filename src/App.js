import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MyProfile from './pages/MyProfile';

const App = () => (
  <>
    <Router>
      <Navbar />
      <Switch>
        <div>
          <Route exact path="/my-profile">
            <MyProfile />
          </Route>
        </div>
      </Switch>
    </Router>
  </>
);

export default App;
