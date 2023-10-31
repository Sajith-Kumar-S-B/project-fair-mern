import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import userImg from  '../Assets/147142.png'
import { Form } from 'react-bootstrap';

function AddProjects() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>

<Button className='rounded-5' onClick={handleShow}>
        Add Projects
      </Button>
       <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Project title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className='row'>
            <div className='col-lg-6'>
            <label className='text-center mt-5' htmlFor='profile'> 
               <input id='profile' style={{display:'none'}} type="file" />
               <img className=' img-fluid'  width={'100%'} src={userImg} alt="" /></label>
            </div>
            <div className='col-lg-6'>
            <Form className='mb-3 text-center'>
                
              <Form.Control className='mb-3 rounded'  type="text" placeholder="Project Title" />
              <Form.Control className='mb-3 rounded' type="text" placeholder="Languages Used" />
              <Form.Control className='mb-3 rounded'  type="text" placeholder="GitHub Link" />

              <Form.Control className='mb-3 rounded' type="text" placeholder="Website Link" />
              <Form.Control className='mb-3 rounded' type="text" placeholder="Project Overview" />

      
              </Form>


            </div>

         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            cancel
          </Button>
          <Button variant="primary">Save</Button>
        </Modal.Footer>
      </Modal>
      </>
  )
}

export default AddProjects