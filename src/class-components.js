import React, { Component } from 'react'

export default class Calendar extends Component {
  getDate() {
    const dayNames = ['Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December']
    const date = new Date()
    const weekDay = dayNames[date.getDay()]
    const day = date.getDate()
    const month = monthNames[date.getMonth()]
    const year = date.getFullYear()+543
    return `Date ${weekDay} at ${day} ${month} ${year}`
  }
  render(){
    return <div style={{fontSize:'25px',}}>{this.getDate()}</div>
  }
}
