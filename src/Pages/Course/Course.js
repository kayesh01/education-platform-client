import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaFileDownload } from 'react-icons/fa';
import ReactToPdf from 'react-to-pdf'

const ref = React.createRef();


const Course = () => {
    const course = useLoaderData();
    return (
        <Card ref={ref}>
            <Card.Img style={{ height: "400px" }} variant="top" src={course.img} />
            <Card.Body>
                <Card.Title>{course.title}</Card.Title>
                <ReactToPdf targetRef={ref} filename="course.pdf">
                    {({ toPdf }) => (
                        <FaFileDownload onClick={toPdf} style={{ height: "50px" }}></FaFileDownload>
                    )}
                </ReactToPdf>

                <Card.Text>
                    {course.details}
                </Card.Text>
                <p><span className='fw-bold'>Course Price</span> ${course.amount}</p>
                <Link className='me-5 btn btn-warning' to='/courses'>Go to courses</Link>
                <Link to={`/checkout/${course.id}`} className='mt-auto btn btn-primary me-5'>Get premium access</Link>
            </Card.Body>
        </Card>
    );
};

export default Course;