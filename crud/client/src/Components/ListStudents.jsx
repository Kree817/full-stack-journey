import React from "react";
import Container from "react-bootstrap/esm/Container";

import Table from 'react-bootstrap/Table';

function ListStudents() {
  return (
    <div>
      <Container>
        <h1> Students List </h1>
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Course</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>BIT</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>BSc.CSSE</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={3}>Colspan Test</td>
        </tr>
      </tbody>
    </Table>
    </Container>
    </div>
  );
}

export default ListStudents;