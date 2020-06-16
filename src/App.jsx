import React, { Component } from 'react';
import Persons from './components/Person/Persons';


class App extends Component {
  state = {
    persons: [
      { id: 1, fullname: 'Jason Jafari' },
    ],
    person: '',
    showPersons: true
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

    if (person.fullname !== "" && person.fullname !== " ") {
      persons.push(person);
      this.setState({ persons, person: '' })
    }
  }

  setPerson = event => {
    this.setState({ person: event.target.value })
  }


  render() {
    const { persons, showPersons } = this.state;



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
      <div className="text-center">
        <div className="alert alert-info">
          <h2>Persons Manager</h2>
        </div>
        <h5 className="aler alert-light">
          There are
          <span className="badge badge-pill badge-success">{persons.length}</span>
           Persons here.
          </h5>
        <div className="m-2 p-2">
          <form className="form-inline justify-content-center" onSubmit={event => event.preventDefault()}>
            <div className="input-group w-25">
              <input
                type="text"
                placeholder="type new name"
                onChange={this.setPerson}
                value={this.state.person}

                className="form-control"
              />
              <div className="input-group-prepend">
                <button onClick={this.handleNewPerson} className="btn btn-sm btn-success fa fa-plus-square" />
              </div>

            </div>
          </form>

        </div>
        {person}
        <button onClick={this.handleShowPerson} className="btn btn-info  "  > Show Persons </button>
        {/* <Person firstName /> */}
      </div>
    );
  }
}

export default App;