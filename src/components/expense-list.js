import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './expense-list-item'
import selectExpenses from '../store/selectors/expenses'

export const ExpenseList = (props) => (
  <div>
    {props.expenses.length === 0 ? (
      <div style={{ width: '100%', paddingTop: '40px' }}>
        <p>No expenses.</p>
      </div>
    ) : (
      props.expenses.map((expense) => <ExpenseListItem key={expense.id} {...expense} />)
    )}
  </div>
)

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  }
}

export default connect(mapStateToProps)(ExpenseList)
