import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      description: props.expense ? props.expense.description : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      note: props.expense ? props.expense.note : '',
      calendarFocused: false,
      error: '',
    }
  }

  onDescriptionChange = (e) => {
    const description = e.target.value
    this.setState(() => ({ description }))
  }

  onAmountChange = (e) => {
    const amount = e.target.value

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }))
    }
  }

  onNoteChange = (e) => {
    const note = e.target.value
    this.setState(() => ({ note }))
  }

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }))
    }
  }

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }))
  }

  onSubmit = (e) => {
    e.preventDefault()

    const { description, amount, createdAt, note } = this.state

    if (!description && !amount) {
      this.setState(() => ({ error: 'Please provide description and amount.' }))
    } else {
      this.setState(() => ({ error: '' }))
      this.props.onSubmit({
        description,
        amount: parseFloat(amount, 10) * 100,
        createdAt: createdAt.valueOf(),
        note,
      })
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p style={{ color: 'red' }}>{this.state.error}</p>}
        <form
          onSubmit={this.onSubmit}
          style={{ display: 'flex', flexDirection: 'column' }}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
            className="input"
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
            className="input"
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
            displayFormat={() => 'DD/MM/YYYY'}
          />
          <textarea
            placeholder="Add a note for your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
            className="textarea"
          />
          <button className="button">Add Expense</button>
        </form>
      </div>
    )
  }
}

export default ExpenseForm
