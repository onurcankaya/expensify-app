import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/app-router'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter, sortByAmount } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore()
const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

store.dispatch(addExpense({ description: 'water bill', amount: 200 }))
store.dispatch(addExpense({ description: 'gas bill', createdAt: 3000 }))
store.dispatch(addExpense({ description: 'rent', amount: 6000 }))

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
)
