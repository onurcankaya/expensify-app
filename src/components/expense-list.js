import React from 'react'
import { connect } from 'react-redux'

import ExpenseListItem from './expense-list-item'
import selectExpenses from '../selectors/expenses'

const ExpenseList = props => {
  return (
    <div>
      <h1>Expense List</h1>
      {props.expenses.map(expense => (
        <ExpenseListItem
          key={expense.id}
          // description={expense.description}
          // amount={expense.amount}
          // createdAt={expense.createdAt}
          // instead of passing all these props like this I can just type:
          {...expense}
        />
      ))}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    // expenses: state.expenses,
    // filters: state.filters.text,
    // instead:
    expenses: selectExpenses(state.expenses, state.filters),
  }
}

export default connect(mapStateToProps)(ExpenseList)
