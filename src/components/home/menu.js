import React from 'react' 
import {Link} from 'react-router-dom'
import {theme} from '../theme/default'
import ShoppingCart from './shoppingCart'
import User from './user'
import { Route } from 'react-router-dom'

export default class Menu extends React.Component
{
    constructor (props) {
        super(props)
        this.state = {
            carts: props.shoppingCarts
        }
    }

    componentWillReceiveProps (props) {
        this.setState(
            {carts: props.shoppingCarts}
        )
    }

    goto = (history,e) => {
        history.push(e.target.value) 
    }

    render () {
        return (
            <Route render={({ history }) => (
                <div style={theme.menuStyle}>
                    <div style={theme.content}>
                    <h1 style={ theme.menuStyle.logo }>OlsonKart</h1>
                    <ul className="menu-list" style={theme.menuStyle.list}> 
                        <li style={theme.menuStyle.list.item}><Link to={`/`}> Home </Link></li>
                        <li style={theme.menuStyle.list.item}><Link to={`/products`}> Mobile Phone </Link></li>
                    </ul>
                    <select onChange={this.goto.bind(this, history)} className="menu-select">
                        <option value="home">Home</option>
                        <option value="products">Mobile Phone</option>
                    </select>
                    <div className="user">
                    <User onClearCartItem={this.props.onClearCartItem} />
                    <ShoppingCart
                        onShowCartDetail={this.props.onShowCartDetail} 
                        items={this.state.carts} />
                    </div> </div>
                </div> ) } />
        )
    }

    
}
