import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <>
                <div className="header">
                    <h1>Welcome to the PokeDex!</h1>
                </div>
                <div className='nav-links'>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/list" >List</Link>
                        </li>
                    </ul>
                </div>
            </>
        )
    }
}
