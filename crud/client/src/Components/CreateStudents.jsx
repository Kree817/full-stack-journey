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

            <h1>
                Create Students
            </h1>
            <form>
                <div class="mb-3">
                    <label htmlFor="" class="form-label">Name</label>
                    <input type="text" class="form-control" placeholder="Name"/>
                </div>
                <div class="mb-3">
                    <label htmlFor="" class="form-label">Course</label>
                    <input type="text" class="form-control" placeholder="Course"/>
                </div>
                <div class="mb-3">
                    <label htmlFor="" class="form-label">Fee</label>
                    <input type="text" class="form-control" placeholder="Fee"/>
                </div>
                <div class="mb-3">
                    <button className="btn btn-success">Submit</button>
                </div>
            </form>




        </div>
    );
}


export default CreateStudents;