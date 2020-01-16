import React from 'react'
import { NavLink } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

numeral.register('locale', 'da-dk', {
  delimiters: {
    thousands: ' ',
    decimal: ',',
  },
  abbreviations: {
    thousand: 'k',
    million: 'm',
    billion: 'b',
    trillion: 't',
  },
  currency: {
    symbol: 'DKK',
  },
})
numeral.locale('da-dk')

const ExpenseListItem = ({ id, description, amount, createdAt, note, dispatch }) => {
  return (
    <div className="expense-list-container">
      <NavLink to={`/edit/${id}`} activeClassName="is-active" className="expense-list-item">
        <h3>{description}</h3>
      </NavLink>
      <p>{numeral(amount / 100).format('$ 0.0[,]00')}</p>
      <p> {moment(createdAt).format('MMMM Do, YYYY')}</p>
      <p>{note}</p>
    </div>
  )
}

export default ExpenseListItem
