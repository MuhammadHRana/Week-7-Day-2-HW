import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import { Home } from './views/Home'
import {Inbox} from './views/Inbox'
import { Login } from './views/Login'
import { Register } from './views/Register'
import {Sent} from './views/Sent'
import {Trash} from './views/Trash'

export const App = () => {
  return (
    <React.Fragment>
      <header>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">Home</Link>
          <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <Link className="nav-link" to="/inbox">Inbox <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sent">Sent</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="." id="dropdownId" data-toggle="dropdown" aria-expanded="false">Shop</a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <Link className="dropdown-item" to="/trash">Trash</Link>
                </div>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/login" className="nav-link">Login</Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link">Register</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/inbox' element={<Inbox />} />
        <Route exact path='/sent' element={<Sent />} />
        <Route exact path='/trash' element={<Trash />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
      </Routes>

      <footer>

      </footer>
    </React.Fragment>
  )
}