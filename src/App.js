import React, {Component} from 'react'
import './App.css';
import List from './components/products/list'
import Home from './components/home' 
import Menu from './components/home/menu'
import CartDetail from './components/home/cart'
import {Route,  Switch} from 'react-router-dom'
// import Footer from './components/home/footer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      carts: {},
      open: false
    }
  }

  componentDidMount() {}

  addCart = (name, qty, price, id) => {
    let carts = this.state.carts
    if (carts[name]) {
      carts[name].qty++
    } else {
      carts[name] = { qty: 1, price: price }
    }
    
    this.setState({
      carts: carts
    })
  }

  updateCart = (name, e) => {
    let carts = this.state.carts
    carts[name].qty = e.target.value
    this.setState({
      carts: carts
    })
  }

  deleteCartItem = name => {
    let carts = this.state.carts
    delete carts[name]
    this.setState({
      carts: carts
    })
  }

  clearCartItem = () => {
    this.setState({
      carts: []
    })
  }

  showCartDetail = () => {
    this.setState({open: true})
  }

  closeCartDetail = () => {
    this.setState({open: false})
  }

  render() {
    return (
      <div className="App">
        <Menu onClearCartItem={this.clearCartItem} onCloseCartDetail={this.closeCartDetail} onShowCartDetail={this.showCartDetail} shoppingCarts={this.state.carts}/>
        <Switch>
          <Route exact path="/" render={() => <Home />}/>
          <Route exact path="/login" render={() => <Home />}/>
          <Route
              exact
              path="/products"
              render={() =><List onAddCart = { this.addCart } /> }
          />
        </Switch>
        {/* <Footer /> */}
        {this.state.open
          ? <CartDetail
              onCloseCartDetail={this.closeCartDetail}
              onDeleteCartItem={this.deleteCartItem}
              onUpdateCart={this.updateCart}
              shoppingCarts={this.state.carts}/>
          : null
        }
      </div>
    )
  }
}

export default App
