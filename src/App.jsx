import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify'



import Persons from './components/Person/Persons';
import Header from './components/common/Header';


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


    const persinIndex = persons.findIndex(p => p.id === id)
    const person = persons[persinIndex]
    toast.error(`${person.fullname} was deleted succsessfully`, {
      position: "top-left",
      closeOnClick: true
    })
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
      // Make Toast
      toast.success('Person add succsessfully.', {
        position: 'bottom-left',
        closeButton: true,
        closeOnClick: true
      });
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
        {/* Alert */}
        <Header personsLength={persons.length} appTitle={this.props.appTitle} />

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
        <ToastContainer />
      </div>
    );
  }
}

export default App;