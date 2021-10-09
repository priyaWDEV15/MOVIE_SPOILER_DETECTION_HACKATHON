import { Slide } from '@material-ui/core'
import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Footer from '../components/Footer'



const Home = () => {
    return (
        <div>
            <Navbar/> 
            <Slider/>
            <Footer/>
        </div>
    )
}

export default Home
