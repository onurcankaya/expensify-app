// get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const startDateMatch =
        typeof startDate !== 'number' || expense.createdAt >= startDate
      const endDateMatch =
        typeof endDate !== 'number' || expense.cratedAt <= endDate
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase())

      // figure out if expenses.description as the text variable string inside of it

      return startDateMatch && endDateMatch && textMatch
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1
      }

      // sortBy -> amount
      // put the ones with a greater amount first
    })
}

export default getVisibleExpenses
