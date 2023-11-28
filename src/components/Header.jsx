import { MDBIcon } from 'mdb-react-ui-kit'
import React, { useContext } from 'react'
import { Link, useNavigate, } from 'react-router-dom'
import {Navbar,Container, Button} from 'react-bootstrap';
import { toast } from 'react-toastify';
import { tokenAuthorisationContext } from '../Contexts/TokenAuth';

function Header({insideDashboard}) {
  const {isAuthorized,setIsAuthorized} = useContext(tokenAuthorisationContext)
const navigate = useNavigate()
  const handleLogout = ()=>{
    sessionStorage.removeItem("registeredUser")
    sessionStorage.removeItem("token")
    setIsAuthorized(false)
    navigate("/")
    toast.warning("Logged Out Successfully")
  }
  return (
    <div style={{width:'100%',backgroundColor:'#e7f1da'}}>

<Navbar expand="lg" style={{backgroundColor:'#e7f1da'}} >
      <Container>
        <Navbar.Brand><Link to={'/'} style={{textDecoration:'none',color:'black',fontWeight:'bold'}}>
           <MDBIcon fas icon="clipboard-list" />
      Project Fair</Link></Navbar.Brand>
      { insideDashboard && <Button onClick={handleLogout}  className='fw-bold rounded-5'>Logout<i className="fa-solid fa-arrow-right-from-bracket fa-beat-fade ms-2"></i></Button>}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
      </Container>
    </Navbar>
        

    </div>
  )
}

export default Header