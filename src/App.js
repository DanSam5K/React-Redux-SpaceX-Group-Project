import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Navbar from './components/Navbar';
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';
import MyProfile from './pages/MyProfile';

const App = () => (
  <Provider store={store}>
    <Router>
      <Navbar />
      <Switch>
        <div className="App">
          <Route exact path="/" component={Rockets} />
          <Route path="/missions" component={Missions} />
          |
          <Route path="/my-profile" component={MyProfile} />
        </div>
      </Switch>
    </Router>
  </Provider>
);

export default App;
