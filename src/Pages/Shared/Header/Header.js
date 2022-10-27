import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Image } from 'react-bootstrap';
import { FaUserAlt } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import logo from '../../../asset/logo.jpg'


const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch((error) => console.error(error))
    }

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container className='d-flex justify-content-between'>
                    <Image style={{ height: "40px" }} roundedCircle src={logo}></Image>
                    <Link className='nav-link me-5 ms-3' to="/">Educationn learning</Link>
                    <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="dark"
                    />
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className='nav-link' to="/">Home</Link>
                            <Link className='nav-link' to="/courses">Courses</Link>
                            <Link className='nav-link' to="/faq">FAQ</Link>
                            <Link className='nav-link' to="/blog">BLOG</Link>
                            {/* <Link className='nav-link'>{user?.displayName}</Link> */}
                            <Link className='nav-link'>{user?.photoURL ?
                                <Image title={user?.displayName} style={{ height: "30px" }} roundedCircle src={user?.photoURL}></Image> :
                                <FaUserAlt></FaUserAlt>
                            }</Link>
                            {
                                user?.uid ?
                                    <>
                                        {/* <span>{user?.displayName}</span> */}
                                        <Button variant="light" onClick={handleLogOut}>Logout</Button>
                                    </>
                                    :
                                    <>
                                        <Link className='nav-link' to="/logIn">LOG IN</Link>
                                        <Link className='nav-link' to="/register">Register</Link>
                                    </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;