import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { UserAuthContextProvider } from '../UserAuthContext';
import { getAuth, signOut } from "firebase/auth";
import { auth } from "../firebase-config";
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Hello{auth.currentUser!==null? `, ${auth.currentUser.email}`:' email here'}</Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li>
                <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
              </li>
              <li>
                <Link className="nav-link" to="/signup">Signup</Link>
              </li>
              <li>
                <Link className="nav-link" to="/todos">View Todos</Link>
              </li>
              <li>
                <Link className="nav-link" onClick={ signOut } to="/login">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}