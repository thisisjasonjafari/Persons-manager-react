import React, { Component } from 'react';
import Persons from './components/Person/Persons';


class App extends Component {
  state = {
    persons: [
      { id: 1, fullname: 'Jason Jafari' },
      { id: 2, fullname: 'Sara RekabTalaei' },
      { id: 3, fullname: 'Majid Bayati' },
    ],
    person: '',
    showPersons: false
  }
  handleShowPerson = () => {
    this.setState({ showPersons: !this.state.showPersons });
    // console.log(this.state.showPersons);
  };

  hadleDeletePerson = id => {
    const persons = [...this.state.persons]
    const filterPerson = persons.filter(p => p.id !== id)
    this.setState({ persons: filterPerson })
  }

  handleNameChange = (event, id) => {
    const { persons: allPersons } = this.state;

    const persinIndex = allPersons.findIndex(p => p.id === id)
    const person = allPersons[persinIndex]
    person.fullname = event.target.value;
    // console.log(event);

    const persons = [...allPersons]

    persons[persinIndex] = person;
    this.setState({ persons });


  }

  handleNewPerson = () => {
    const persons = [...this.state.persons];
    const person = {
      id: Math.floor(Math.random() * 10000),
      fullname: this.state.person
    }
    persons.push(person);
    this.setState({ persons, person: '' })
  }

  setPerson = event => {
    this.setState({ person: event.target.value })
  }


  render() {
    const { persons, showPersons } = this.state;

    const bottonStyle = {
      padding: "1em",
      fontFamily: "BYekan",
      backgroundColor: "pink"
    };

    let person = null;

    if (showPersons) {
      person = (
        <Persons
          persons={persons}
          personDelete={this.hadleDeletePerson}
          personChange={this.handleNameChange}
        />
      );
    }



    return (
      <div>
        <h2>Persons Manager</h2>
        <h4>There are {persons.length} are here.</h4>
        <div>
          <input
            type="text"
            placeholder="new person"
            onChange={this.setPerson}
            value={this.state.person}
          />
          <button onClick={this.handleNewPerson}>add</button>
        </div>
        {person}
        <button onClick={this.handleShowPerson} className="btn btn-sm btn-success fa fa-plus-square"  > </button>
        {/* <Person firstName /> */}
      </div>
    );
  }
}

export default App;