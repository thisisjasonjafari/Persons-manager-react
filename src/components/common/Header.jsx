import React, { useContext } from 'react'
import { Alert, Badge } from 'react-bootstrap';
import SimpleContext from '../../context/SimpleContext';




const Header = ({appTitle}) => {
  const context = useContext(SimpleContext)

  const { persons   } = context 


  let badngeStyle = '';
  if (persons.length >= 3) badngeStyle = 'success';
  if (persons.length <= 2) badngeStyle = 'warning';
  if (persons.length <= 1) badngeStyle = 'danger';

  return (
    <div>
      <Alert variant="info" >
        <h2>{appTitle}</h2>
      </Alert>
      <Alert variant="light">

        <h5>
          There are
      <Badge pill
            variant={badngeStyle}
          >
            { persons.length}
          </Badge>
      Persons here.
      </h5>
      </Alert>
    </div>
  );
}

export default Header;