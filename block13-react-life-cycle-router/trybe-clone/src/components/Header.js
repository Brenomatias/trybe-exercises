import React from 'react';

import TrybeLogo from '../img/logo.svg';


class Header extends React.Component {
  render() {
    return (
      <header className="Header">
        <button className="toggle-button" type="button">
        </button>
        <img src={ TrybeLogo } alt="Trybe Logo" />
        <h4>Curso</h4>

      </header>
    );
  }
}

export default Header;
