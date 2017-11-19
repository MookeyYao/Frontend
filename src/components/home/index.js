import React from 'react'
import Login from '../auth/login'
import Banner from './banner'
import Footer from '../home/footer'

const Home = () => ( 
    <div className="home" >
            {       
                !localStorage.getItem('user') ?
                <div>
                    <div className="home-inner"> <div className="welcome"> <h2> Login to Access Amazing Benefits </h2>
                    <p style={{marginTop: '20px'}}></p>
                    <img src="back2.jpg" alt="" width="100%" />
                    <p style={{marginTop: '20px'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                       
                    </p>
                    </div> {
                        !localStorage.getItem('user') ?  <Login /> : null
                    }
                    </div> 
                    <Footer />
                </div>: 
                <Banner />
            } 
       
       
      </div>
)

export default Home


