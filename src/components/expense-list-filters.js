import React from 'react'
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates'
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from '../actions/filters'

class ExpenseListFilters extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      startDate: props.filters.startDate,
      endDate: props.filters.endDate,
      calendarFocused: null,
    }
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate))
    this.props.dispatch(setEndDate(endDate))
  }

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }))
  }

  render() {
    return (
      <div className="expense-list-filters">
        <input
          type="text"
          value={this.props.filters.text}
          placeholder="Search expenses"
          onChange={(e) => {
            this.props.dispatch(setTextFilter({ text: e.target.value }))
          }}
          className="input"
        />
        <select
          value={this.props.filters.sortBy}
          onChange={(e) => {
            if (e.target.value === 'date') {
              this.props.dispatch(sortByDate())
            } else if (e.target.value === 'amount') {
              this.props.dispatch(sortByAmount())
            }
          }}
          className="select">
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
          displayFormat={() => 'DD/MM/YYYY'}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  }
}

export default connect(mapStateToProps)(ExpenseListFilters)
