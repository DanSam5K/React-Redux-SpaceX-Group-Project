/* eslint-disable linebreak-style */
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Navbar from './components/Navbar';
import Rockets from './pages/Rockets';
import Missions from './components/Missions';
import Profile from './components/Profile';

const App = () => (
  <Provider store={store}>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/rockets">
          <Rockets />
        </Route>
        <Route path="/missions">
          <Missions />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Redirect from="/" to="/rockets" />
      </Switch>
    </Router>
  </Provider>
);

export default App;
