import React from 'react'

export const CartAmountConverter = (items) => 
    Object.keys(items).reduce((sum, item) =>
        sum += parseInt(items[item].qty, 10) * items[item].price, 0)
 
 const CartQtyConverter = (items) => 
    Object.keys(items).reduce((sum, item) =>
        sum += parseInt(items[item].qty, 10), 0)

export default class ShoppingCart extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            items: props.items
        }
    }

    componentWillReceiveProps (props) {
        this.setState({
            items: props.items
        })
    }

    render () {
        return (
            <div className="tag" onClick={this.props.onShowCartDetail}> items:  {
                this.state && this.state.items ?
                    CartQtyConverter(this.state.items) : 0
                } - $ {  this.state && this.state.items ? 
                        CartAmountConverter(this.state.items) : 0}</div>
        )
    }

}