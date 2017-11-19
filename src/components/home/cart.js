import React from 'react'
import {theme, palatte} from '../theme/default'
import {CartAmountConverter} from './shoppingCart'

export default class CartDetail extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            items: props.shoppingCarts
        }
    }

    componentWillReceiveProps(props) {
        this.setState({items: props.shoppingCarts})
    }

    catchEvent = (e) => {
        e.stopPropagation()
    }

    render() {
        return (
            <div onClick={this.props.onCloseCartDetail} style={theme.dialogBackground}>
                <div className="dialog" onClick={this.catchEvent} style={theme.dialog}>
                    <h4>Shopping Cart</h4>
                    <table style={{width: '96%'}}>
                        <thead>
                            <tr>
                                <th>NAME</th>
                                <th>QTY</th>
                                <th>Price</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state && this.state.items
                                ? Object
                                    .keys(this.state.items)
                                    .map(key => (
                                        <tr key={key}>
                                            <td>{key}</td>
                                            <td>
                                                <input
                                                    type="number"
                                                    min="1"
                                                    onChange={this
                                                    .props
                                                    .onUpdateCart
                                                    .bind(null, key)}
                                                    defaultValue={this.state.items[key].qty}/></td>
                                            <td>$ {this.state.items[key].price}</td>
                                            <td>
                                                <button
                                                    onClick={this
                                                    .props
                                                    .onDeleteCartItem
                                                    .bind(null, key)}
                                                    style={theme.button}>X</button>
                                            </td>
                                        </tr>
                                    ))
                                : null
}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td
                                    style={{
                                    textAlign: 'right'
                                }}
                                    colSpan="4">
                                    <b>Total:</b>
                                    ${this.state && this.state.items
                                        ? CartAmountConverter(this.state.items)
                                        : 0}
                                </td>

                            </tr>
                        </tfoot>
                    </table>
                    <div style={{ textAlign: 'right' }}>
                    <button onClick={this.props.onCloseCartDetail} style={{ ...theme.button, backgroundColor: '#fff', border: '1px solid #ddd', color: palatte.textColor }} >Continue shopping</button>
                    <button onClick={this.props.onCloseCartDetail} style={{ ...theme.button, backgroundColor: palatte.primaryColor, marginLeft: '10px' }}>Check out</button>
                </div>
                </div>
              
            </div>
        )
    }
}
