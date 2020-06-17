import   { createContext } from 'react';

const SimpleContext =  createContext({
  persons: {},
  person: '', 
  hadleDeletePerson: () => { },
  handleNameChange: () => { },
  handleNewPerson: () => { },
  setPerson: () => { },
})

export default SimpleContext;