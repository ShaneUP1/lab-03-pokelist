import React, { Component } from 'react'

export default class Sort extends Component {
    render() {
        return (
            <div>
                <span>Filter Pokemon by attack or defense values:</span>
                <select onChange={this.props.attackFilter}>
                    <option value=''>Attack</option>
                    <option value='20'>0-20</option>
                    <option value='40'>21-40</option>
                    <option value='60'>41-60</option>
                    <option value='80'>61-80</option>
                    <option value='100'>81-100</option>
                </select>
                <select onChange={this.props.defenseFilter}>
                    <option value=''>Defense</option>
                    <option value='20'>0-20</option>
                    <option value='40'>20-40</option>
                    <option value='60'>40-60</option>
                    <option value='80'>60-80</option>
                    <option value='100'>80-100</option>
                </select>
            </div>
        )
    }
}
