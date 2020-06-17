import React, { useContext } from 'react'
import Person from './person';
import SimpleContext from '../../context/SimpleContext';

const Persons = () => {
  const context = useContext(SimpleContext)
  // console.log(context);
  return (
    <div>
      {
        context.persons.map(person => (
          <Person
            key={person.id}
            fullname={person.fullname}
            age={person.age}
            personDelete={() => context.hadleDeletePerson(person.id)}
            changed={(event) => context.handleNameChange(event, person.id)}
          />
        ))
      }
    </div>
  );
}

export default Persons;