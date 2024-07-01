import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import '../App.css';

function Header(){
    return(
    <div>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">CodroidHub</Navbar.Brand>
          <Nav className="ml-auto navbar-wrapper">
            <Link to  ={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/course"}>Course</Link>
            <Link to={"/student"}>Student</Link>
            <Link to={"/contact"}>Contact</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
    )
}

export default Header;