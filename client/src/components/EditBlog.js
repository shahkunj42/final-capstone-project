import React from 'react'
import { Form, Container, Button } from 'semantic-ui-react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function EditBlog({blogs, setBlogs}) {

    const [formState, setFormState] = useState({})
    const [errors, setErrors] = useState(null)
    const {id} = useParams()

    let navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const newFormObj = {
            title,
            header_image,
            content
        }
        
        fetch(`/blogs/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newFormObj),
        })
        .then((r) => {
            if(r.ok) {
            r.json()
        .then((data) => setBlogs(data))
        .then(navigate('/blogs'))
    }
    else {
        r.json().then((err) => setErrors(err.errors));
    }
})
}
    
    
    const {title, header_image, content} = formState


    function handleFormChange(e) {
        const {name, value} = e.target
        setFormState((prevState) => ({...prevState, [name]:value}))
    }

    return(
        <div>
        <h1>New Blog Form</h1>
        <Container>
            <Form onSubmit={handleSubmit}>
                <input onChange={handleFormChange} type="text" id="title" placeholder="Title" name="title"></input>

                <Form.TextArea onChange={handleFormChange} style={{ height: 500}} type="text" id="content" placeholder="What was your newest adventure?" name="content" />
                
                <input onChange={handleFormChange} type="text" id="header_image" placeholder="Header Image" name="header_image"></input>
            <Button type="submit" >Submit</Button>
                <br></br>
            </Form>
        </Container>
        <h1>{errors ? {errors} : null}</h1>
        </div>
    )
}

export default EditBlog