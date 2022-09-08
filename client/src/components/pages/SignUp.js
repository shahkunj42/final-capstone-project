import React, { useState } from "react";
import { Form, Button, Container } from 'semantic-ui-react'
import { useNavigate } from "react-router-dom";


function SignUp({setUser}) {
    const [formState, setFormState] = useState({})
    const [errors, setErrors] = useState(null)

    let navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const newFormObj = {
            username,
            name,
            email,
            password,
            password_confirmation
        }
        
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newFormObj),
        })
        .then((r) => {
            if(r.ok){
         r.json()
        .then((data) => setUser(data))
        .then(navigate('/'))
        }
        else {
            r.json().then((err) => setErrors(err.errors));
        }
    })
    }
    
    const {username, password, name, email, password_confirmation} = formState

    function handleFormChange(e) {
        const {name, value} = e.target
        setFormState((prevState) => ({...prevState, [name]:value}))
    }

    return(
        <div>
            <h1>Create an Account</h1>

            <Container>
            
            <Form onSubmit={handleSubmit}>

                <label htmlFor="username">Username</label>
                <input onChange={handleFormChange} type="text" id="username" name="username" ></input>

                <label htmlFor="name">Government Name</label>
                <input onChange={handleFormChange} type="text" id="name" name="name" ></input>

                <label htmlFor="email">Email</label>
                <input onChange={handleFormChange} type="text" id="email" name="email" ></input>

                <div>
                    <br></br>
                    <p className="password">Please choose a password with at least</p>
                        <ul className="password_list">
                            <li>8 characters</li>
                            <li>1 capitalized letter</li>
                            <li>1 number</li>
                            <li>1 special character</li>
                        </ul>
                </div>

                <label htmlFor="password">Password</label>
                <input onChange={handleFormChange} type="password" id="password" name="password" ></input>
                
                <label htmlFor="password_confirmation">Password Confirmation</label>
                <input onChange={handleFormChange} type="password" id="password_confirmation" name="password_confirmation"></input>


                <Button color='olive' type="submit">Submit</Button>

                </Form>

                </Container>

                <h1>{errors ? {errors} : null}</h1>
        </div>
    );
}

export default SignUp;