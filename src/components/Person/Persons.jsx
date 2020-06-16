import React from 'react'
import Person from './person';

const Persons = ({ persons, personDelete, personChange }) => {
  return (
    <div>
      { 
        persons.map(person => (
          <Person
            key={person.id}
            fullname={person.fullname}
            age={person.age}
            personDelete={() => personDelete(person.id)}
            changed={(event) => personChange(event, person.id)}
          />
        ))
      }
    </div>
  );
}

export default Persons;