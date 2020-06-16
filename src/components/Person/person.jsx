import React from 'react'

const Person = ({ fullname, personDelete, changed }) => {
  return (
    <div style={{ cursor: "pointer" }}>
      <p onClick={personDelete} >{`${fullname}   `}</p>
      <input type="text" placeholder={fullname} onChange={changed} />
    </div>
  );
}

export default Person;