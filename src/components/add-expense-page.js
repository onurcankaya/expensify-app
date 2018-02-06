import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './expense-form'
import { addExpense } from '../actions/expenses'

const AddExpensePage = ({ dispatch, history }) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm
      onSubmit={expense => {
        dispatch(addExpense(expense))
        history.push('/')
        console.log(expense)
      }}
    />
  </div>
)

export default connect()(AddExpensePage)
