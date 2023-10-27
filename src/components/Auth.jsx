import React from 'react'
import login from '../Assets/3d-account-login-and-password-form-page-vector-45098221-removebg-preview.png'
import { Link } from 'react-router-dom'
import {Button, Form} from 'react-bootstrap';
import { MDBIcon } from 'mdb-react-ui-kit';

function Auth({register}) {
    const isRegisterForm = register?true:false
  return (
    <div style={{width:'100%',height:'100vh'}} className='d-flex justify-content-center align-items-center' >
     <div  className='w-75 container'>
      <Link to={'/'} style={{textDecoration:'none'}}><i className='fa-solid fa-arrow-left me-1 mb-5'></i> Back to Home
      </Link>
      <div style={{backgroundColor:'#A0E8AB'}} className='card shadow rounded border-0'>
        <div  className='row align-items-center'>
          <div className='col-lg-6 border-end'>
            <img className='img-fluid' src={login} alt="login" />

          </div>
          <div className='col-lg-6 '>
            <div className='d-flex align-items-center flex-column'>
              <h1 className='fw-bolder text-light mt-3'> <MDBIcon fas icon="clipboard-list" />Project Fair</h1>
              <h5 className='mt-2 pb-3 text-light'>
                {isRegisterForm?'Sign Up':'Sign In'}
                </h5>
                <Form className='text-light w-75'>
               {isRegisterForm && <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>User Name</Form.Label>
        <Form.Control className='rounded' type="text" placeholder="Enter User Name" />
       
      </Form.Group>}

      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control className='rounded' type="email" placeholder="Enter email" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        
        <Form.Control className='rounded' type="Password" placeholder="Enter Password" />
        
      </Form.Group>
     {
     isRegisterForm?
      <div> 
        <button className='btn btn-dark text-light mb-3 rounded' type='submit' >Register</button>
    <p>Already have an Account? Click here to <Link style={{textDecoration:'none'}}  to={'/login'}>Login</Link> </p>
      </div>:<div>
        <button className='btn btn-dark text-light mb-3 rounded' type='submit' >Login</button>
        <p className='text-dark'>Don't have an Account? Click here to <Link style={{textDecoration:'none'}}  to={'/register'}>Register</Link> </p>

        
        </div>
}

                </Form>
            </div>

          </div>

        </div>

      </div>
     </div>
    </div>
  )
}

export default Auth