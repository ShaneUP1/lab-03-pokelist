import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <form onSubmit={this.props.searchFilter}>
                Looking for someone specific?
                <input type='text' onChange={this.props.name} />
                <button>Search</button>
            </form>
        )
    }
}
