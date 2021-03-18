import React, { Component } from 'react'
import {Consumer} from '../context'
import axios from 'axios'

export default class addForm extends Component {

    state = {
        id:4,
        work:"",
        completed:false
    }

    update=(e)=>{
        this.setState({
            work:e.target.value
        })
    }

    add=(dispatch,e)=>{
        e.preventDefault()
        const newTodo = this.state
        axios.post("/todos", newTodo).then(res=> dispatch({type:"ADD", payload:res.data}))
        this.setState({work:""})
    }
    render() {
        return (
            <Consumer>{value =>{
                const {dispatch} = value
                return <form onSubmit={this.add.bind(this, dispatch)}>
                <input className="form-control rounded-2" placeholder="What needs to be done?" onChange={this.update} value={this.state.work}/>
                <button className="rounded-2 form-control btn-danger" type="submit">+</button>
            </form>
            }}</Consumer>
        )
    }
}
