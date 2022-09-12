import React, { useState } from "react";
import { Form, Button, Container } from 'semantic-ui-react'
import { useNavigate } from "react-router-dom";

function InquiryForm({user}) {
  const [formState, setFormState] = useState({
            username: user.username,
            name: user.name,
            email: user.email
  })
    const [errors, setErrors] = useState(null)

    let navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const newFormObj = {
            username: user.username,
            name: user.name,
            email: user.email,
            description,
            service
        }


        
        fetch("/inquries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newFormObj),
        })
        .then((r) => {
            if(r.ok){
         r.json()
        .then((data) => console.log(data))
        .then(navigate('/'))
        }
        else {
            r.json().then((err) => setErrors(err.errors));
        }
    })
    }

    
    const {description, service} = formState

    function handleFormChange(e) {
        const {name, value} = e.target
        setFormState((prevState) => ({...prevState, [name]:value}))
    }

    console.log(formState)

    return(
        <div>
            <h1>Create an Account</h1>

            <Container>
            
            <Form onSubmit={handleSubmit}>

                <label htmlFor="description">Which service are you interested in?</label>
                <input onChange={handleFormChange} type="text" id="service" placeholder="Service" name="service"></input>

                <label htmlFor="description">Give us a brief detailed explanation of what you are looking for!</label>
                <Form.TextArea onChange={handleFormChange} style={{ height: 100}} type="text" id="description" name="description" placeholder='Description...'/>

                <Button color='olive' type="submit">Submit</Button>

                </Form>

                </Container>

                <h1>{errors ? {errors} : null}</h1>
        </div>
    );
}

export default InquiryForm