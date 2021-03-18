import React, { Component } from 'react'
import axios from 'axios'
import AlertTemplate from 'react-alert-template-basic'
import { useAlert } from 'react-alert'

const Context = React.createContext()


const reducer = (prevState,action) =>{
    switch(action.type){
        case "TOGGLE":
            return {todos:prevState.todos.map(t=>{if(t._id===action.payload){t.completed=!t.completed}; return t})}

        case "REMOVE":
            return {todos:prevState.todos.filter(todo => todo._id !== action.payload)}

        case "ADD":
            return {todos:[...prevState.todos, action.payload]}

            default:
                return prevState
    }
}
export class Provider extends Component {

    state = {
        todos : [],

        dispatch:(action)=>this.setState(prevState => reducer(prevState,action))
    }

    componentDidMount(){
        axios.get('/todos').then(res=>this.setState({todos:res.data}))
    }
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer