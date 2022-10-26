import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container className='d-flex justify-content-between'>
                    <Link className='nav-link' to="/">Educationn learning</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className='nav-link' to="/">Home</Link>
                            <Link className='nav-link' to="/courses">Courses</Link>
                            <Link className='nav-link' to="/faq">FAQ</Link>
                            <Link className='nav-link' to="/blog">BLOG</Link>
                            <Link className='nav-link' to="/logIn">LOG IN</Link>
                            <Link className='nav-link' to="/register">Register</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;