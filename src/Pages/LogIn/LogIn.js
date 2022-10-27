import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const LogIn = () => {
    const { providerLogin, signIn } = useContext(AuthContext)

    const googleProvider = new GoogleAuthProvider()

    const navigate = useNavigate();
    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate('/')
            })
            .catch(error => console.error(error));

    }

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }



    return (
        <Form onSubmit={handleLogIn} className='d-flex flex-column align-items-center' style={{
            marginTop: "100px"
        }}>
            <Form.Group className="mb-3 w-25" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3 w-25" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>
            <Button variant="primary" type="submit">
                LogIn
            </Button>
            <Button onClick={handleGoogleSignIn} className='mt-2' variant="primary" type="submit">
                Log In with Google
            </Button>
            <Button className='mt-2' variant="primary" type="submit">
                Log In with GitHub
            </Button>
        </Form >
    );
};

export default LogIn;