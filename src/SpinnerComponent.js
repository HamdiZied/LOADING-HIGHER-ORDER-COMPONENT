import React from 'react';
import {Spinner} from 'react-bootstrap'

const SpinnerComponent = () => {
    return(
      <div className="spi">  
    <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
    </Spinner>
    </div>
    )
    }

export default SpinnerComponent;