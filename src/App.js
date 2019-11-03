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
        <div>
          <form onSubmit={<Navigate val={}/>}>
            <input type="text"></input>
            <button>Search</button>
          </form>
        </div>

        <Navigate/>
        <GetReq/>
      </div>
    )
  }
}

