import React from "react";
import Container from "react-bootstrap/esm/Container";

import '../App.css';
import img2 from "../assets/img2.png";

function About(){
    return(
        <Container>
        <div>
            <h1>
                Hi! This is a Basic Site for CRUD Operations.
            </h1>

            <div>
            <img src={img2} className="slider-image"></img>
            </div>

        </div>
        </Container>
    )
}

export default About;