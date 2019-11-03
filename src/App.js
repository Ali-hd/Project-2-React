import React, { Component } from 'react'
import './App.css'
import Navigate from './components/Navigate'
import GetReq from './components/GetReq'

export default class App extends Component {

  state={

  }

  render() {
    return (
      <div>
        <Navigate/>
        <GetReq/>
      </div>
    )
  }
}

