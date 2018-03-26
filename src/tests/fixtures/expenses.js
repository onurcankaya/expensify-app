import moment from 'moment'

const expenses = [
  {
    id: 1,
    description: 'Rent',
    amount: 6000,
    createdAt: 0,
  },
  {
    id: 2,
    description: 'Internet',
    amount: 300,
    createdAt: moment(0)
      .subtract(4, 'days')
      .valueOf(),
  },
  {
    id: 3,
    description: 'Groceries',
    amount: 2000,
    createdAt: moment(0)
      .add(4, 'days')
      .valueOf(),
  },
]

export default expenses
