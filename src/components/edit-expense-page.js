import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './expense-form'
import { editExpense, removeExpense } from '../actions/expenses'

const EditExpensePage = props => (
  <div>
    <h1>Edit Expense</h1>
    <ExpenseForm
      expense={props.expense}
      onSubmit={expense => {
        console.log(expense)
        props.dispatch(editExpense(props.expense.id, expense))
        props.history.push('/')
        console.log(expense)
      }}
    />
    <button
      onClick={() => {
        props.dispatch(removeExpense({ id: props.expense.id }))
        props.history.push('/')
        console.log(props.expense.id)
      }}
    >
      Remove
    </button>
  </div>
)

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id),
})

export default connect(mapStateToProps)(EditExpensePage)
