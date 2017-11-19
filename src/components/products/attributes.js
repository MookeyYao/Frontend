import React from 'react'


let cart = {}

export default class Attributes extends React.Component
{ 
    constructor(props) {
        super(props)
        if (props.product) {
            this.state = {
                product: props.product
            }
        }
        
    }

    componentWillReceiveProps(props) {
        console.log(props)
        this.setState({product: props.product})
    }

    cancel = () => {
        if (this.props.onCancel) {
            this
                .props
                .onCancel()
        }
    }
    selectColor = (color) => {
        cart.color = color
    }

    selectQty = e => {
        if (isNaN(e.target.value)) {
            this.setState({
                error: 'qty must be number'
            })
        } else {
            cart.qty = e.target.value
            this.setState({
                error: null
            })
        }
    }

    addCart = (id) => {
        this.props.onAddCart(id, cart.color, cart.qty)
    }

    render() {
        return (
           <div> {
               this.state && this.state.product ? 
                <div>
               <ColorPicker
                onColorChange={this.selectColor}
                colors={this.state.product.colors}/> 

                <input onChange={this.selectQty} />
                {
                    this.state && this.state.error ?
                    <p style={{color: '#f00'}} > { this.state.error } </p> : null
                }
                <div>
                    <button onClick={this.cancel}>Cancel</button>
                    <button onClick={this.addCart.bind(this, this.state.product.id)}>Ok</button>
                </div></div>
             : null } </div>
        )
    }
}

const colorPickerStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    display: 'inline-block',
    boxSizing: 'border-box'
}

const colorConverter = color => {
    switch (color) {
        case 'white':
            return '#fff'
        case 'black':
            return '#000'
        case 'gray':
            return '#aaa'
        case 'yellow':
            return '#ff0'
    }
    return 'rgba(0,0,0,0)'
}

class ColorPicker extends React.Component {

    handelColorChange = (color) => {
        if (this.props.onColorChange) {
            this
                .props
                .onColorChange(color)
        }

        this.setState({selectedColor: color})

    }

    render() {
        return (
            <div>
                {this
                    .props
                    .colors
                    .map(color => (<div
                        onClick={this
                        .handelColorChange
                        .bind(this, color)}
                        style={{
                        backgroundColor: colorConverter(color),
                        ...colorPickerStyle,
                        border: this.state && this.state.selectedColor == color
                            ? '2px #00f solid'
                            : ''
                    }}/>))
}

            </div>
        )
    }
}
