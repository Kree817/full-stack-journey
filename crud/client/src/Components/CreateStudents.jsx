import React from "react";
import Container from "react-bootstrap/esm/Container";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import FormGroup from "react-bootstrap/esm/FormGroup";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function CreateStudents() {
    const [name, setName]=useState()
    const [course, setCourse]=useState()
    const [fee, setFee]=useState()

    const navigate=useNavigate()


    const Submit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3001/createStudent",{name,course,fee})
        .then(result=>{
            console.log(result)
            navigate("/")
        })
        .catch(err=>console.log(err))
    }

    return (
        <div>
    
            <form onSubmit={Submit}>
            <h1>
                Create Students
            </h1>
                <div class="mb-3">
                    <label htmlFor="" class="form-label">Name</label>
                    <input type="text" class="form-control" placeholder="Name" 
                    onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div class="mb-3">
                    <label htmlFor="" class="form-label">Course</label>
                    <input type="text" class="form-control" placeholder="Course"
                    onChange={(e)=>setCourse(e.target.value)}/>
                </div>
                <div class="mb-3">
                    <label htmlFor="" class="form-label">Fee</label>
                    <input type="text" class="form-control" placeholder="Fee"
                    onChange={(e)=>setFee(e.target.value)}/>
                </div>
                <div class="mb-3">
                    <button className="btn btn-success">Submit</button>
                </div>
            </form>




        </div>
    );
}


export default CreateStudents;