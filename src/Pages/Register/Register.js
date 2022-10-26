import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Register = () => {
    return (
        <Form className='d-flex flex-column align-items-center' style={{
            marginTop: "70px"
        }}>
            <Form.Group className="mb-3 w-25" controlId="formBasicEmail">
                <Form.Label>Your name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" required />
            </Form.Group>
            <Form.Group className="mb-3 w-25" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3 w-25" controlId="formBasicEmail">
                <Form.Label>Your Picture</Form.Label>
                <Form.Control type="file" placeholder="Upload your Image" required />
            </Form.Group>
            <Form.Group className="mb-3 w-25" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form >
    );
};

export default Register;