import React from 'react'
import { Form, Container, Button } from 'semantic-ui-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function PosterForm({setPosters}) {

    const [formState, setFormState] = useState({})
    const [errors, setErrors] = useState(null)

    let navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const newFormObj = {
            title,
            image,
            description,
            price,
            admin_id: 1
        }
        
        fetch("/posters", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newFormObj),
        })
        .then((r) => {
            if(r.created) {
            r.json()
        .then((data) => setPosters((prevState) => [...prevState, data]))
        .then(navigate('/posters'))
    }
    else {
        r.json().then((err) => setErrors(err.errors));
    }
})
}
    
    
    const {title, description, image, price} = formState


    function handleFormChange(e) {
        const {name, value} = e.target
        setFormState((prevState) => ({...prevState, [name]:value}))
    }

    return(
        <div>
          <h1>New Poster Form</h1>
        <Container>
            <Form onSubmit={handleSubmit}>
                <input onChange={handleFormChange} type="text" id="title" placeholder="Title" name="title"></input>

                <input onChange={handleFormChange} type="file" id="image" placeholder="image" name="image"></input>
                
                <input onChange={handleFormChange} type="text" id="description" placeholder="Describe you product" name="description"></input>

                <input onChange={handleFormChange} type="text" id="price" placeholder="Price" name="price"></input>
            <Button type="submit" >Submit</Button>
                <br></br>
            </Form>
        </Container>
        <h1>{errors ? {errors} : null}</h1>
        </div>
    )
}

export default PosterForm;