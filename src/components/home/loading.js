import React from 'react'

const Loading = ({ background, display }) => (
    <div style={{display: display ? display : 'block'}} className="loader">Loading...
        <div className="after" style={{background: background ? background : '#fff'}} />
    </div> 
)

export default Loading