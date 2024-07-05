import React from "react";
import Container from "react-bootstrap/esm/Container";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import FormGroup from "react-bootstrap/esm/FormGroup";
import { useState } from "react";


function CreateStudents() {
    return (
        <div>
            <Container>
                <h1>
                    Create Students
                </h1>
                {/* const [date, setDate] = useState(new Date()); */}

                <Form>
                    <Form.Group className="mb-3" controlId="FirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="LastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" />
                    </Form.Group>
                    
                    {/* <FormGroup>
                    <Form.Control
                type="date"
                name="datepic"
                placeholder="DateRange"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              /></FormGroup> */}


  
              
                    <Dropdown className="d-inline mx-0">
                        <Dropdown.Toggle id="dropdown-autoclose-true">
                            Courses
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#">Bsc CSIT</Dropdown.Item>
                            <Dropdown.Item href="#">BIT</Dropdown.Item>
                            <Dropdown.Item href="#">BCA</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                            <Form.Check
                                inline
                                label="Male"
                                name="group1"
                                type={type}
                                id={`inline-${type}-1`}
                            />
                            <Form.Check
                                inline
                                label="Female"
                                name="group2"
                                type={type}
                                id={`inline-${type}-2`}
                            />
                            <Form.Check
                                inline
                                label="Others"
                                name="group3"
                                type={type}
                                id={`inline-${type}-3`}
                            />
                        </div>
                    ))}
                </Form>

                <Button variant="success">Submit</Button>{' '}

            </Container>
        </div>
    );
}


export default CreateStudents;