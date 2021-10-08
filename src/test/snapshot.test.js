import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Missions from '../components/Missions';
import Rockets from '../components/Rockets';
import Profile from '../components/Profile';
import store from '../redux/configureStore';

describe('Components Snapshots test', () => {
  it('renders missions as intended', () => {
    const UIMissions = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Missions />
          </BrowserRouter>
        </Provider>
      )
      .toJSON();
    expect(UIMissions).toMatchSnapshot();
  });

  it('renders rockets as intended', () => {
    const UIRockets = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Rockets />
          </BrowserRouter>
        </Provider>
      )
      .toJSON();
    expect(UIRockets).toMatchSnapshot();
  });
  it('renders my profile as intended', () => {
    const UIProfile = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Profile />
          </BrowserRouter>
        </Provider>
      )
      .toJSON();
    expect(UIProfile).toMatchSnapshot();
  });
});
