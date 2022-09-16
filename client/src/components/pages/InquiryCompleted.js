import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

function InquiryCompleted() {
  return (
    <div style={{textAlign: "center", marginRight: "auto", marginLeft: "auto", width: "50%"}}>
        <h1>Thank you for your request!</h1>
        <p>We will respond to you through email within 48 hours</p>
        <br></br>
        <p>Return Home?</p>
        <Link to='/'><Button>Home</Button></Link>
    </div>
  )
}

export default InquiryCompleted