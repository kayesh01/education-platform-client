import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const course = useLoaderData();
    console.log(course);
    return (
        <div>

            <h2>Please Fill Up the bellow Form to Purchase the <span className='badge bg-primary'>{course.name}</span>.</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Phone Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your phone number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your address.</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your address" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default CheckOut;