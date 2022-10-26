import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const LogIn = () => {
    return (
        <Form className='d-flex flex-column align-items-center' style={{
            marginTop: "100px"
        }}>
            <Form.Group className="mb-3 w-25" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
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

export default LogIn;