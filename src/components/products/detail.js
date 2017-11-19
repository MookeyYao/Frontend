import React from 'react'
import Card from './card'
import {getProducts} from '../../api'
import Attributes from './attributes'

export default class Detail extends React.Component {

    componentWillMount () {
        getProducts(data => {
            this.setState( {
                product: data.find(d => d.id == this.props.route.match.params.id)
            })
        })
    }

    back = () => {
        window.history.back()
    }

    render () { 
        return (
            <div style={{backgroundColor: '#ddd'}}>
                {
                    this.state && this.state.product ? 
                    <div>
                        <Card product={this.state.product} />
                        <Attributes onCancel={this.back} onAddCart={this.props.onAddCart} product={this.state.product} />
                    </div>: null
                }            
            </div>
        )
    }

}