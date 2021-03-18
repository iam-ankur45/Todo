import axios from 'axios'
import React, { Component } from 'react'
import {Consumer} from '../context'

export default class entry extends Component {

    style =()=>{
        const {completed} = this.props.todo
        return {textDecoration : completed? "line-through" :"none"}
    }

    toggle =(id, dispatch)=>{
        dispatch({type:"TOGGLE", payload:id})
    }

    remove =(id, dispatch)=>{
        axios.delete(`/todos/${id}`).then(()=>dispatch({type:"REMOVE", payload:id}))
    }
    render() {
        const {work, _id} = this.props.todo
        return (
            <Consumer>{value=>{
                const {dispatch} = value
                return <h4 className="text-dark text-center p-1 bg-light border-bottom" style={this.style()}>
                <i className="far fa-times-circle fa-sm float-left m-1 text-danger" onClick={this.remove.bind(this,_id,dispatch)}></i>{work}
            <input type="checkbox" className="m-2 float-right" onChange={this.toggle.bind(this, _id, dispatch)}/>
            </h4>
            }}
            </Consumer>
        )
    }
}
