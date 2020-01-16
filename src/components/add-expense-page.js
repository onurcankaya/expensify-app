import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './expense-form'
import { addExpense } from '../store/actions/expenses'

const AddExpensePage = ({ dispatch, history }) => (
  <div className="content-container">
    <div className="expense-forms-container">
      <h1>Add Expense</h1>
      <ExpenseForm
        onSubmit={(expense) => {
          dispatch(addExpense(expense))
          history.push('/')
        }}
      />
    </div>
  </div>
)

export default connect()(AddExpensePage)
