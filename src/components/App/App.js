import React, { Component } from 'react';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import local from '../../data/local';
import science from '../../data/science';
import technology from '../../data/technology';

import Menu from '../Menu/Menu';
import Header from '../Header/Header';
import NewsContainer from '../NewsContainer/NewsContainer';
import './App.css';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      // news: {local, technology, entertainment, science, health },
      news: null,
      // news: {
      //   local:[],
      //   technology: [],
      //   entertainment:[],
      //   science:[],
      //   health:[]
      // },
      selectedMenu: 'local',
      searchQuery: '',
      isLoading: false,
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch('https://whats-new-api.herokuapp.com/api/v1/news')
      .then(response => response.json())
      .then(data => this.setState({ news: data, isLoading: false }))
  }

  handleChange = (event) => {
    this.setState({ selectedMenu: event.target.id });
  }

  setSearchQuery = (term) => {
    this.setState({ searchQuery: term });
  }

  render () {
    return (
      <main className="app">
        <Header
          news={this.state.news}
          searchQuery={this.state.searchQuery}
          setSearchQuery={this.setSearchQuery}
        />
        <Menu
          news={this.state.news}
          selectedMenu={this.state.selectedMenu}
          handleChange={this.handleChange}
        />
        <NewsContainer
          news={this.state.news}
          selectedMenu={this.state.selectedMenu}
          searchQuery={this.state.searchQuery}
        />
      </main>
    );
  }
}

export default App;
