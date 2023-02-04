import React, { useState } from 'react'
import Navbar from './Navbar';

export default function Netflix() {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageXOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  }
  return <div className="">
    <Navbar isScrolled={isScrolled} />
  </div>
}
