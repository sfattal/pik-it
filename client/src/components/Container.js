import React from 'react';

function Container(props) {
  return <div className={` text-center pt-5 container${props.fluid ? "-fluid" : ""}`} {...props} />;
}

export default Container;

// simply makes all of the containers fluid
