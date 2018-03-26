import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
    <NavLink className="navbar-brand" exact to="/dashboard">TR</NavLink>
    <ul className="nav justify-content-end">
      <li className="nav-item"><NavLink className="nav-link" to="/contact">CONTACT</NavLink></li>
      <li className="nav-item"><NavLink className="nav-link" to="/support">SUPPORT</NavLink></li>
      <li className="nav-item"><NavLink className="nav-link" to="/team">TEAM</NavLink></li>
      <li className="nav-item"><button className="btn btn-danger" onClick={startLogout}>LOGOUT</button></li>
    </ul>
  </nav>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
