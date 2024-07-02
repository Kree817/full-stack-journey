import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "react"


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {

  return (
    
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="ml-auto">
            <Link ="/">Home</Link>
            <Link ="about">About</Link>
            <Link ="gallery">Gallery</Link>
            <Link ="blog">Blogs</Link>
            <Link ="contact">Contact</Link>
          </Nav>
        </Container>
      </Navbar>

      <h1>Wadakam</h1>

    </div>

  )
}

export default App
