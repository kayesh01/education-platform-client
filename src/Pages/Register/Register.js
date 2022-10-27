import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('')
    const { createUser } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                setError('');
                form.reset();
            })
            .catch(error => {

                console.error(error)
                setError(error.message);
            });
    }

    return (
        <Form onSubmit={handleSubmit} className='d-flex flex-column align-items-center' style={{
            marginTop: "70px"
        }}>
            <Form.Group className="mb-3 w-25" controlId="formBasicEmail">
                <Form.Label>Your name</Form.Label>
                <Form.Control name='name' type="text" placeholder="Enter name" />
            </Form.Group>
            <Form.Group className="mb-3 w-25" controlId="formBasicEmail">
                <Form.Label>Your Picture</Form.Label>
                <Form.Control name='photoURL' type="text" placeholder="Photo URL" />
            </Form.Group>
            <Form.Group className="mb-3 w-25" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3 w-25" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>
            <Button variant="primary" type="submit">
                Register
            </Button>
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
            <p>Already registered ? than <Link to='/login'>Login</Link> </p>
        </Form >
    );
};

export default Register;