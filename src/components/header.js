import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <header className="header">
    <div className="content-container">
      <h1>Expense Tracking</h1>
      <div className="navigation">
        <NavLink to="/" activeClassName="is-active" exact>
          Dashboard
        </NavLink>
        <NavLink to="/create" activeClassName="is-active">
          Create Expense
        </NavLink>
      </div>
    </div>
  </header>
)

export default Header
