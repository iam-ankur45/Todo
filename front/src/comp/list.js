import Entry from './entry';
import {Consumer} from '../context'
import React, { Component } from 'react'

export default class list extends Component {
    render() {
        return (
            <Consumer>
                {value =>{
                    const {todos} = value
                    return todos.map(t => <Entry todo={t} key={t.id}></Entry>)
                }}
            </Consumer>
                
        )
    }
}
