import React, { useState } from 'react'
import backgroundImage from '../assets/home.jpg';
import MovieLogo from '../assets/homeTitle.webp';
import Navbar from '../components/Navbar';
import { FaPlay } from 'react-icons/fa';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import styled from 'styled-components';

export default function Netflix() {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageXOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  }
  return (
    <Container> 
    <Navbar isScrolled={isScrolled} />
    <div className="hero">
      <img src={backgroundImage} alt="background" className='background-image' />
      <div className="container">
        <div className="logo">
          <img src={MovieLogo} alt="Movie Logo" />
        </div>
        <div className="buttons flex">
          <button className='flex j-center a-center'><FaPlay />Play</button>
          <button className='flex j-center a-center'><AiOutlineInfoCircle />More Info</button>
        </div>
      </div>
    </div>
    </Container>
  )
}
