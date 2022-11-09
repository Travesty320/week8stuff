import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Nav extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Home</Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">Signup</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/todolist">To-Do List</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled"></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export const hello = 1234

export const hi = 5432