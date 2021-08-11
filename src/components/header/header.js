import React from 'react';

import './header.css';

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="#">
          Social App
        </a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="#">People</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;