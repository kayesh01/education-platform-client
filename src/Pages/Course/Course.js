import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Course = () => {
    const course = useLoaderData();
    console.log(course);
    return (
        <Card>
            <Card.Img style={{ height: "400px" }} variant="top" src={course.img} />
            <Card.Body>
                <Card.Title>{course.title}</Card.Title>
                <Card.Text>
                    {course.details}
                </Card.Text>
                <p><span className='fw-bold'>Course Price</span> ${course.amount}</p>
                <Link className='me-5 btn btn-warning' to='/courses'>Go to courses</Link>
                <Button variant="light"><Link to='/checkout'>Get premium access</Link> </Button>
            </Card.Body>
        </Card>
    );
};

export default Course;