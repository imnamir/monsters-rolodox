import React, { Component } from 'react';

import { CardList } from './components/card-listing/card-listing.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchFields: ''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({monsters: data}))
  }
  onHandleChange = (e) => {
    this.setState({ searchFields: e.target.value})
  }
  render() {
    const {monsters, searchFields} = this.state;
    const filteredMonster = monsters.filter(monster => monster.name.toLowerCase().includes(searchFields.toLowerCase()))
    return (
    <div className="App">
      <h1>Monsters Rolodox</h1>
      <SearchBox placeholder="Search monsters"  onHandleChange={this.onHandleChange} />
      <CardList monsters={filteredMonster} />
    </div>
    )
  }
}
export default App;
