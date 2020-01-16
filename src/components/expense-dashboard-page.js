import React from 'react'
import ExpenseList from './expense-list'
import ExpenseListFilters from './expense-list-filters'

const ExpenseDashboardPage = () => (
  <div className="content-container">
    <div className="expense-forms-container">
      <ExpenseListFilters />
      <ExpenseList />
    </div>
  </div>
)

export default ExpenseDashboardPage
