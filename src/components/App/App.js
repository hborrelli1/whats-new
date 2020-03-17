import React, { Component } from 'react';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import local from '../../data/local';
import science from '../../data/science';
import technology from '../../data/technology';

import Menu from '../Menu/Menu';
import NewsContainer from '../NewsContainer/NewsContainer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      news: {entertainment, health, local, science, technology },
      selectedMenu: 'local',
    }
  }

  handleChange = event => {
    console.log(event.target)
    // this.setState({ selectedMenu: event.target.id });
  }

  render () {
    return (
      <div className="app">
        <Menu
          categories={Object.keys(this.state.news)}
          selectedMenu={this.state.selectedMenu}
          onChange={event => this.handleChange(event)}
        />
        <NewsContainer
          news={this.state.news}
          selectedMenu={this.state.selectedMenu}
        />
      </div>
    );
  }
}

export default App;
