import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <form onSubmit={this.props.searchFilter}>
                Type in a name to search by:
                <input type='text' onChange={this.props.name} />
                <button>Search</button>
            </form>
        )
    }
}
