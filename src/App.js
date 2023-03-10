import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.components';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  handllechange = (e)=> {
    this.setState({ searchField: e.target.value})
  }

  render() {
    const {monsters, searchField} = this.state;
    const fiilteredMonsters = monsters.filter((monster)=> monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()));
    return (
      <div className="App">
        <h1> Monster Rolodex </h1>
        <SearchBox placeholder='Search Monster' handllechange={this.handllechange}/>
        <CardList monsters={fiilteredMonsters} />
      </div>
    );
  }
}

export default App;
