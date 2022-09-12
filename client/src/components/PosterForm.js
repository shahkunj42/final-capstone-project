import React from 'react'
import { Form, Container, Button } from 'semantic-ui-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function PosterForm({setPosters}) {
    const [errors, setErrors] = useState(null)
    let navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData();

    data.append("poster[title]", event.target.title.value);
    data.append("poster[image]", event.target.image.files[0]);
    data.append("poster[description]", event.target.description.value)
    data.append("poster[price]", event.target.price.value)
    data.append("poster[admin_id]", 1)
    submitToAPI(data);
  }
  function submitToAPI(data) {
    fetch("/posters", {
      method: "POST",
      body: data,
    })
    .then((r) => {
         if(r.created) {
         r.json()
         .then((data) => setPosters(data))
         .then(navigate('/posters'))
        }
        else {
            r.json().then((err) => setErrors(err.errors));
        }
    })
}
return(
             <div>
             <h1>New Poster Form</h1>
                <Container>
                 <Form onSubmit={handleSubmit}>
                     <label htmlFor="title">Title</label>
                     <input type="text" id="title" placeholder="Title" name="title"></input>
    
                     <label htmlFor="image">Image</label>
                     <input type="file" id="image" placeholder="image" name="image"></input>
                    
                     <label htmlFor="description">Description</label>
                     <Form.TextArea style={{ height: 100}} type="text" id="description" placeholder="Describe you product" name="description" />
                    
                     <label htmlFor="price">Price</label>
                     <input type="text" id="price" placeholder="Price" name="price"></input>
    
                 <Button type="submit" >Submit</Button>
                     <br></br>
                 </Form>
             </Container>
             <h1>{errors ? {errors} : null}</h1>
             </div>
         )
}
export default PosterForm;