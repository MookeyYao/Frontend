import React from 'react' 
import {Link} from 'react-router-dom'
import { Route } from 'react-router-dom'

export default class User extends React.Component
{ 
    logout = (history) => {
        window.localStorage.removeItem('user') 
        this.props.onClearCartItem() 
        
    }

    render () {
        let user =  window.localStorage.getItem('user')
        return (
            <Route render={({ history }) => (
            <div className="tag">
               {
                user  ? <Link onClick={this.logout.bind(this, history)} to={`/`}>Log out</Link> :
                    <Link to={`/login`}>Login</Link>
               }
            </div>
        ) } />)
    }

    
}