import React from 'react'

const EditExpensePage = props => {
  console.log(props)
  return <div>Editing the expense on page {props.match.params.id}</div>
}

export default EditExpensePage
