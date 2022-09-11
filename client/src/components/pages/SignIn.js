import React from 'react'
import { useState } from "react";
import { Form, Button, Container } from 'semantic-ui-react'
import { useNavigate, Link } from 'react-router-dom';


function SignIn ({setUser, setAdmin}) {
    const [formState, setFormState] = useState({})
    const [errors, setErrors] = useState(null)

    let navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const newFormObj = {
            username,
            password
        }
        
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newFormObj),
        })
        .then((r) => {
        if (r.ok) {
            r.json().then((data) => {
              if(data.username === 'admin'){
                setAdmin(data)
              }
              else{
              setUser(data)
              }
            })
            .then(navigate('/'))}
        else {
            r.json().then((err) => setErrors(err.errors));
            }
        })}  
    
    const {username, password} = formState


    function handleFormChange(e) {
        const {name, value} = e.target
        setFormState((prevState) => ({...prevState, [name]:value}))
    }

    return(
        <div>
            <h1>Sign In</h1>
            <Container>
            <Form onSubmit={handleSubmit} className="form">
                <label htmlFor="username">Username</label>
                <input onChange={handleFormChange} type="text" id="username" placeholder="username" name="username" ></input>

                <label htmlFor="password">Password</label>
                <input onChange={handleFormChange} type="password" id="password" placeholder="password" name="password" ></input>

                <Button color='olive' type="submit">Signin</Button>
                <br></br>
                <h1>Don't have an account yet?</h1>
                <Link to='/sign-up'>
                <Button color='olive'>Sign Up</Button>
                </Link>

            </Form>
            </Container>

            <p>{errors ? <h1>{errors}</h1> : null}</p>
        </div>

    )
}

export default SignIn