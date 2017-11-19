import React from 'react'
import {theme, palatte} from '../theme/default'
import {validateUser} from '../../api'
import { Route } from 'react-router-dom'

export default class ShoppingCart extends React.Component {


    login = (history) => {
        validateUser(
            this.textInput.value, 
            this.password.value)
        .then(response => {
            if (response.status === 'success') {
                localStorage.setItem('user', JSON.stringify({
                    name: this.textInput.value,
                    token: response.token
                }))
                if (this.remember.checked) {
                        localStorage.setItem('remember', JSON.stringify({
                        name: this.textInput.value,
                        password: this.password.value
                    }))
                } else {
                    if (localStorage.getItem('remember')) {
                        localStorage.removeItem('remember')
                    }
                }
                history.push('/products')
            } else {
                return Promise.reject(response.status)
                }
            })
            .catch(function (error) {
                alert(`error occurred, message: ${error}`)
            })
    }

    reset = () => {
         this.textInput.value = ''
         this.password.value = ''
    }

    render() {
        let remember = localStorage.getItem('remember') ?
                     JSON.parse(localStorage.getItem('remember')) : null
        return (
            <Route render={({ history }) => (
                <div className="login" >
                    <h3 style={{marginBottom: '1.5em'}}>Login</h3>
                    <p>
                        <span>User name </span>
                        <input
                            ref={(input) => {
                            this.textInput = input
                        }}
                        defaultValue={
                            remember ? remember.name : ''
                        } 
                        />
                    </p>
                   
                    <p><span>Password</span>
                       <input
                            ref={(input) => {
                            this.password = input
                        }}
                        defaultValue={
                            remember ? remember.password : ''
                        }
                            type="password"/> 
                    </p>
                    <div style={{marginBottom: '10px'}}> 
                        <input type="checkbox" style={{minWidth: 'auto'}} ref={(input) => {
                            this.remember = input
                        }} />remember me </div>
                    <button style={{...theme.button, backgroundColor: palatte.primaryColor, marginRight: '16px'}} onClick={this.login.bind(this, history)}>Sign in
                    </button>

                     <button type="reset" style={{...theme.button, backgroundColor: palatte.primaryColor}} onClick={this.reset}>Reset
                    </button>
                </div>)} />
        )
    }

}