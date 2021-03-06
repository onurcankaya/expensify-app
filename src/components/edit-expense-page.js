import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './expense-form'
import { editExpense, removeExpense } from '../store/actions/expenses'

const EditExpensePage = (props) => (
  <div className="content-container">
    <div className="expense-forms-container">
      <h1>Edit Expense</h1>
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
          props.dispatch(editExpense(props.expense.id, expense))
          props.history.push('/')
        }}
      />
      <button
        onClick={() => {
          props.dispatch(removeExpense({ id: props.expense.id }))
          props.history.push('/')
        }}
        className="button-alternate">
        Remove
      </button>
    </div>
  </div>
)

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id),
})

export default connect(mapStateToProps)(EditExpensePage)
