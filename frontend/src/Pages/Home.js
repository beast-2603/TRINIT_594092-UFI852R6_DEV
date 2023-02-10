import React from 'react'
import Nav from "../Components/Nav"
import logo from "../Images/farmer.jpg"

const Home = () => {
  return (
    <div >
    
        <img className= "logo" src={logo} alt="Farmer" />
        <div>
            <Nav />
        </div>

    </div>
  )
}

export default Home