import React, { Component } from 'react'

export default class SpinnerPage extends Component {
    render() {
        return (
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        )
    }
}

