import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import {NavBarComponent} from './components/navbar/NavBarComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React Product'
    };
  }

  render() {
    return (
      <div>
        <NavBarComponent name={this.state.name}/>
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
