import React, { Component } from 'react';
import { render } from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { CONSTANTS } from './common/Constants';
import {NavBarComponent} from './components/navbar/NavBarComponent';
import ProductPage from './pages/ProductPage';
import './style.css';
import history from './services/History';
import { InitialState } from './store/InitialState';
import configureStore from './store/ConfigureStore';

const { store } = configureStore(InitialState, history);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React Product'
    };
  }

  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <NavBarComponent />
          <Switch>
            <Route
              path={CONSTANTS.APP_LINKS.HOME}
              component={ProductPage}
            />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));
