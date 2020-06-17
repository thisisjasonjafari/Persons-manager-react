import React from 'react'
import { Alert, Badge } from 'react-bootstrap';




const Header = ({ personsLength , appTitle}) => {

  let badngeStyle = '';
  if (personsLength >= 3) badngeStyle = 'success';
  if (personsLength <= 2) badngeStyle = 'warning';
  if (personsLength <= 1) badngeStyle = 'danger';

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
            {personsLength}
          </Badge>
           Persons here.
          </h5>
      </Alert>
    </div>
  );
}

export default Header;