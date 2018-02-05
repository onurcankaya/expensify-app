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
store.subscribe(() => {
  const state = store.getState()
  console.log(state)
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(visibleExpenses)
})

store.dispatch(addExpense({ description: 'water bill', amount: 200 }))
store.dispatch(addExpense({ description: 'gas bill', amount: 300 }))
store.dispatch(setTextFilter({ text: 'bill' }))
store.dispatch(setTextFilter({ text: 'gas' }))
store.dispatch(setTextFilter({ text: 'ill' }))
store.dispatch(sortByAmount())

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'))
