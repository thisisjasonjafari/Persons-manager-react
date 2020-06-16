import React from 'react'

import './Person.css'
const Person = ({ fullname, personDelete, changed }) => {
  return (
    <div  className="person" >
      <p  >{`${fullname}`}</p>
      <input type="text" placeholder={fullname} onChange={changed} />
      <button onClick={personDelete} >delete</button>
    </div>
  );
}

export default Person;