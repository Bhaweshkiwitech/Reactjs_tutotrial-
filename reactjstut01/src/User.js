import React, { Component } from 'react';

class User extends Component {
    constructor(){
        super()
        this.state={
            email:'bp@1234'
        }

    }
    render() {
        console.log('render method', this.state.email)
        return (
            
            <div>
                <h1>User Component </h1>
                <button onClick={()=>this.setState({email:'dp@1234'})}>Update email</button>
            </div>
        );
    }
}

export default User;