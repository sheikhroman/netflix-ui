import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'

export default function Navbar({isScrolled}) {
    const links = [
        { name: "Home", link: "/" },
        { name: "TV Shows", link: "/tv" },
        { name: "Movies", link: "/movies" },
        { name: "My List", link: "/mylist" }];
    return (<Container>
        <nav className={`flex ${ isScrolled? "scrolled": "" }`}>
            <div className="left flex a-center">
                <div className="brand flex a-center j-center">
                    <img src={logo} alt="logo" />
                </div>
            </div>
        </nav>
            </Container>)
}
const Container = styled.div`

`;