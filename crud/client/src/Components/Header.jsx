import React from "react";
import '../App.css';

import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
    return (
      <div>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">CRUD</Navbar.Brand>
            <Nav className="ml-auto header-wrapper">
              <Link to="/about">About</Link>
              <Link to="/">List</Link>
              <Link to="/create">Create</Link>
              <Link to="/update">Update</Link>
            </Nav>
          </Container>
        </Navbar>
    </div>
    )
    }
export default Header;