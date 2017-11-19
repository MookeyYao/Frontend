import React from 'react'
import {theme} from '../theme/default'

const cardStyle = {
    img: {
       height: '200px'
    }
}

const Card = ({product}) => (
    <div style={theme.productCardStyle}> 
        <img alt={product.name} style={cardStyle.img} src={product.imgurl} /> 
            <h3> { product.name } </h3>
            <p style={{ height: '44px', overflow: 'hidden',textOverflow: 'ellipsis', margin: '10px auto' }}> { product.description } </p>
            
       </div>
)

export default Card