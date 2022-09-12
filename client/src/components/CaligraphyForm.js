import React from 'react'
import { Form, Container, Button } from 'semantic-ui-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function CaligraphyForm({setCaligraphies}) {
    const [errors, setErrors] = useState(null)
    let navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData();

    data.append("caligraphy[title]", event.target.title.value);
    data.append("caligraphy[image]", event.target.image.files[0]);
    data.append("caligraphy[description]", event.target.description.value)
    data.append("caligraphy[price]", event.target.price.value)
    data.append("caligraphy[admin_id]", 1)
    submitToAPI(data);
  }
  function submitToAPI(data) {
    fetch("/caligraphies", {
      method: "POST",
      body: data,
    })
    .then((r) => {
         if(r.created) {
         r.json()
         .then((data) => setCaligraphies(data))
         .then(navigate('/caligraphies'))
        }
        else {
            r.json().then((err) => setErrors(err.errors));
        }
    })
}
return(
             <div>
             <h1>New Calligraphy Form</h1>
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

//   return (
//     <div>
//       <h1>File Form</h1>
//       <form onSubmit={(e) => handleSubmit(e)}>
//         <label htmlFor="title">Title</label>
//         <input type="text" name="title" id="title" />
//         <br />

//         <label htmlFor="image">Image</label>
//         <input type="file" name="image" id="image" />
//         <br />

//         <label htmlFor="description">Description</label>
//         <input type="text" name="description" id="description" />
//         <br />

//         <label htmlFor="price">Price</label>
//         <input type="text" name="price" id="price" />
//         <br />


//         <button type="submit">Create Post</button>
//       </form>
//     </div>
//   );
// }



    // const [formState, setFormState] = useState({})
//     const[title, setTitle] = useState('')
//     const[image, setImage] = useState('')
//     const[price, setPrice] = useState('')
//     const[description, setDescription] = useState('')
//     const [errors, setErrors] = useState(null)

//     let navigate = useNavigate();
//     console.log(image)

//     function handleSubmit(e) {
//         e.preventDefault();
//         const newFormObj = {
//             title: title,
//             image: image,
//             description: description,
//             price: price,
//             admin_id: 1
//         }

        
//         fetch("/caligraphies", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(newFormObj),
//         })
//         .then((r) => {
//             if(r.created) {
//             r.json()
//         .then((data) => setCaligraphies((prevState) => [...prevState, data]))
//         .then(navigate('/caligraphies'))
//     }
//     else {
//         r.json().then((err) => setErrors(err.errors));
//     }
// })
// }


// //     function handleFormChange(e) {
// //     const {name, value} = e.target
// //     setFormState((prevState) => ({...prevState, [name]:value}))
// // }

//     
// }

export default CaligraphyForm;