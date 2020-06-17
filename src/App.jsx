import React, { useState } from 'react';

import Radium from 'radium';
import { ToastContainer, toast } from 'react-toastify'



import Persons from './components/Person/Persons';
import Header from './components/common/Header';
import SimpleContext from './context/SimpleContext';
import NewPerson from './components/Person/NewPerson';


const App = () => {


  const [getPersons, setPersons] = useState(
    [
      { id: 1, fullname: 'Jason Jafari' },
    ]
  )

  const [getSinglePerson, setSinglePerson] = useState("")
  const [getShowPersons, setShowPersons] = useState(true)
  const [getAppTitle, setAppTitle] = useState("Persons Manager")


  const handleShowPerson = () => {
    setShowPersons(!getShowPersons);

  };

  const hadleDeletePerson = id => {
    const persons = [...getPersons]
    const filterPerson = persons.filter(p => p.id !== id)
    setPersons(filterPerson)


    const persinIndex = persons.findIndex(p => p.id === id)
    const person = persons[persinIndex]
    toast.error(`${person.fullname} was deleted succsessfully`, {
      position: "top-left",
      closeOnClick: true
    })
  }

  const handleNameChange = (event, id) => {
    const allPersons = getPersons;


    const persinIndex = allPersons.findIndex(p => p.id == id)
    const person = allPersons[persinIndex]
    person.fullname = event.target.value;
    const persons = [...allPersons]

    persons[persinIndex] = person;
    setPersons(persons);


  }

  const handleNewPerson = () => {
    const persons = [...getPersons];
    const person = {
      id: Math.floor(Math.random() * 10000),
      fullname: getSinglePerson
    }

    if (person.fullname !== "" && person.fullname !== " ") {
      persons.push(person);
      setPersons(persons)
      setSinglePerson("")
      // Make Toast
      toast.success('Person add succsessfully.', {
        position: 'bottom-left',
        closeButton: true,
        closeOnClick: true
      });
    }
  }

  const setPerson = event => {
    setSinglePerson(event.target.value)
  }

  let person = null;

  if (getShowPersons) { person = (<Persons />); }

  return (
    <SimpleContext.Provider value={{
      persons: getPersons,
      person: getSinglePerson,
      hadleDeletePerson: hadleDeletePerson,
      handleNameChange: handleNameChange,
      handleNewPerson: handleNewPerson,
      setPerson: setPerson

    }}>

      <div className="text-center">

        <Header appTitle="Persons Manager" />

        <NewPerson />

        <button
          onClick={handleShowPerson}
          className={getShowPersons ? "m-2 btn btn-info " : "m-2 btn btn-danger"}
          style={{':hover': {color:'red' , backgroundColor : 'black'}}}
        >
          {getShowPersons ? `Hide Persons` : `Show Persons`}
        </button>
        {person}
        <ToastContainer />
      </div>


    </SimpleContext.Provider>


  );
}




export default Radium(App);