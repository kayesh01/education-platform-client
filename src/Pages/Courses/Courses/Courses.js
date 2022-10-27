import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <Container>
            <Row>
                <Col md="3">
                    <ListGroup className='mt-2'>
                        {
                            courses.map(course => <Link to={`/course/${course.id}`} className='mt-auto btn btn-dark mb-3' variant="light">{course.name}</Link>)
                        }
                    </ListGroup></Col>
                <Col md="9">
                    <Container fluid className='mt-2'>
                        <Row>
                            {courses.map(course => (<Col md="4" className='mb-2'>
                                <Card style={{ height: "440px" }}>
                                    <Card.Img variant="top" src={course.img} />
                                    <Card.Body className='d-flex flex-column'>
                                        <Card.Title>{course.title}</Card.Title>
                                        {/* <Card.Text>
                                            {course.details}
                                        </Card.Text> */}
                                        <Link to={`/course/${course.id}`} className='mt-auto btn btn-primary' variant="primary">Course Details</Link>
                                    </Card.Body>
                                </Card>
                            </Col>))}
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;