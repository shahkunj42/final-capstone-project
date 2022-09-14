import React from 'react'
import {useNavigate} from 'react-router-dom';
import { Button } from 'semantic-ui-react'

function LogOut({setUser, setAdmin}) {
    
    let navigate = useNavigate();

    function handleLogOut(){
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
            setUser(null)
            setAdmin(null);
            }
        })
        .then(navigate('/'))
    }
    
  return (
    <div className='logout'>
        <h1>Are you sure you want to leave?</h1>
        <Button color='green' onClick={handleLogOut} >Log Out</Button>
    </div>
  )
}

export default LogOut