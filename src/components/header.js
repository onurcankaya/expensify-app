import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <header>
    <NavLink to="/" activeClassName="is-active" exact>
      Dashboard
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      Create Expense
    </NavLink>
    <NavLink to="/edit/:id" activeClassName="is-active">
      Edit Expense
    </NavLink>
  </header>
)

export default Header
