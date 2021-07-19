import React from 'react';
import NavLinks from './NavLinks';

const NavTabs = (props) => {
  
  return (
    <ul className="nav nav-tabs">
      <NavLinks {...props} />
    </ul>
  );
}

export default NavTabs;
