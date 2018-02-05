import React from 'react'

const ExpenseListItem = ({ description, amount, createdAt }) => {
  return (
    <div>
      <h3>{description}</h3>
      {amount} - {createdAt}
    </div>
  )
}

export default ExpenseListItem
