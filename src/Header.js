import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div className="header"> Let's Get a Pokemon!
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/list" >List</Link>
                    </li>
                    <li>
                        <Link to="/fetch" >Fetch</Link>
                    </li>

                </ul>
            </div>
        )
    }
}
