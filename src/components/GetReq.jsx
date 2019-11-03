import React, { Component } from 'react'
import axios from 'axios'

export default class GetReq extends Component {
    state = {
        posts: []
    }

  componentDidMount() {
        axios.get("https://api-v3.igdb.com/games", {
            headers: {
                "user-key": "f588d20a4d1313e44d89fded0f7b08ea",
                Accept: "application/json"
            }
        })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error)
            });  
    }
    render() {
        return (
            <div>
                List of posts
            </div>
        )
    }
}
