import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const LogIn = () => {
    const [error, setError] = useState('');
    const { providerLogin, signIn, providerGithub } = useContext(AuthContext)

    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const navigate = useNavigate();

    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                setError('');
                navigate(from, { replace: true });

            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            });

    }

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;

            })
            .catch(error => console.error(error))
    }

    const handleGitHubSignIn = () => {
        providerGithub(githubProvider)
            .then(result => {
                const user = result.user;
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
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
            <Button variant="primary" type="submit">
                LogIn
            </Button>
            <p>Not registered ? Please registere here . <Link to='/register'>register</Link>  </p>
            <Button onClick={handleGoogleSignIn} className='mt-2' variant="primary" type="submit">
                Log In with Google
            </Button>
            <Button onClick={handleGitHubSignIn} className='mt-2' variant="primary" type="submit">
                Log In with GitHub
            </Button>
        </Form >
    );
};

export default LogIn;