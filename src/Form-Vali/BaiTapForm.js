import React, { Component } from 'react'
import Search from './Search'
import FormSV from './FormSV'
import TableSV from './TableSV'

export default class BaiTapForm extends Component {
  render() {
    return (
      <div className='container'>
        <h3>Bài Tập Form</h3>
        <Search />
        <FormSV />
        <TableSV />
      </div>
    )
  }
}
