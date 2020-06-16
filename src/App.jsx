import React, { Component } from 'react';
import { Alert, Button, Badge } from 'react-bootstrap';



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

    let badngeStyle = '';
    if (persons.length >= 3) badngeStyle = 'success';
    if (persons.length <= 2) badngeStyle = 'warning';
    if (persons.length <= 1) badngeStyle = 'danger';

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
        <Alert variant="info" >
          <h2>Persons Manager</h2>
        </Alert>
        <Alert variant="light">

          <h5>
            There are
          <Badge pill
              variant={badngeStyle}
            >
              {persons.length}
            </Badge>
           Persons here.
          </h5>
        </Alert>


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
                <Button
                  onClick={this.handleNewPerson}
                  variant="success"
                  size="sm"
                  className="fa fa-plus-square"
                />
              </div>

            </div>
          </form>

        </div>

        <button
          onClick={this.handleShowPerson}
          className={showPersons ? "m-2 btn btn-info " : "m-2 btn btn-danger"}
        >
          {showPersons ? `Hide Persons` : `Show Persons`}
        </button>
        {person}
      </div>
    );
  }
}

export default App;