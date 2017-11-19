import React from 'react'
import {palatte} from '../theme/default' 

export default class Banner extends React.Component {
     constructor (props) {
         super(props)

         this.state = {
             selectIndex : 0
         }
     }
    
     activate (i) {
         this.setState({
             selectIndex: i
         })
     }
    
    render () {
        return (
            <div className="banner" >
                <div className="slide" style={{ backgroundImage: 'url(back1.jpg)', display: this.state.selectIndex === 0 ? 'block' : 'none' }}>                 
                </div>
                <div className="slide" style={{ backgroundImage: 'url(back2.jpg)', display: this.state.selectIndex === 1 ? 'block' : 'none' }}>            
                </div>
                <div className="slide" style={{ backgroundImage: 'url(back3.jpg)', display: this.state.selectIndex === 2 ? 'block' : 'none' }}>
                </div>
                <div className="slide" >
                    <h1 style={{marginTop: '20%', fontSize: '3em'}}> Go to Mobile Phone Page Check Products </h1>
                    <h2 style={{ fontSize: '2em'}}> Donec tristique est sit amet diam interdum semper. Vestibulum condimentum ante urna, vel interdum odio accumsan id. </h2>
                    <ul className="indicator">
                        {
                        [0,1,2].map(i => (
                            <li key={i} onClick={this.activate.bind(this, i)} style={{backgroundColor: this.state.selectIndex === i ? palatte.primaryColor : '' }} />
                        ))
                        }
                    </ul>
                    <div >
                    </div >
                </div>         
            </div>
        )
    }
}
 