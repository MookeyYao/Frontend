import React from 'react'
import Card from './card'
import {getProducts} from '../../api'
import {theme} from '../theme/default'
import Loading from '../home/loading'

export default class List extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            open: false,
            top: 0,
            left: 0
        }
    }

    componentWillMount() {
        if (localStorage.getItem('user')) { 
            getProducts(data => { 
                this.setState({products: data.res})
            })
        }
    }

    addCart = (product, i) => {
        this.props.onAddCart(product.name, 1, product.price, i)
    }

    handelCancel = () => {
        this.setState({
            open: false
        })
    }
 
    render() {
        return (
            <div style={theme.productsStyle}>
                <h1 style={{ fontSize: '3.5em', margin : '1em auto' }}>It's Lorem ipsum dolor sit amet consectetur</h1>
                <ul className="productlist">
                    {this.state && this.state.products
                        ? this.state.products
                            .map( (product, i) => (
                                <li key={i} style={theme.productsStyle.item}> 
                                    <Card product={product} key={product.name}/> 
                                  
                                    <span className="tag" style={{ marginRight: '20px' }}>$ {product.price}</span>
                                    <button style={theme.button}
                                        onClick={this
                                        .addCart
                                        .bind(this, product, i)}>
                                        Quick Buy
                                    </button>
                                </li>)) 
                        : localStorage.getItem('user') ? <Loading />  : <h2 style={{ marginTop: '50px ' }}> Access Denied </h2>
                    } </ul>   
                <div> 
                </div>
            </div>
        )
    }

}