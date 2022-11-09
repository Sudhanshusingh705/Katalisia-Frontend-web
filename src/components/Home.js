import React from 'react'
import '../styles/Home.css'
import Section from './Section'
import Navbar from "./Navbar";
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='homeContainer'>
        <div className='centerContainer'>
          <div className='leftContent'>
            <p className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has</p>
            <div>
              <button type="button" class="btn-demo" >Book demo</button>
            </div>
          </div>
          <div className='rightContent'>
            <img src='https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
          </div>
        </div>
      </div>

      <Section />
      <Footer />
    </div>
  )
}

export default Home