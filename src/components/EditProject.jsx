import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import { BASE_URL } from '../services/baseUrl';
function EditProject({project}) {

    const [projectDetails,setProjectDetails] = useState({
        title:project.title,languages:project.languages,overview:project.overview,gitHub:project.gitHub,website:project.website,projectImage:""
      })
      const [preview,setPreview] = useState("")

    const [show, setShow] = useState(false);
    const handleClose = () =>
    { setShow(false);
    }
    const handleShow = () => setShow(true);
  return (
    <>
<button onClick={handleShow} className="btn"><i className="fa-solid fa-pen-to-square"></i></button>
<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Project title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className='row'>
            <div className='col-lg-6'>
            <label className='text-center mt-5'> 
        <input   style={{display:'none'}} type="file" />
               <img className=' img-fluid'  width={'100%'} src={`${BASE_URL}/uploads/${project.projectImage}`} alt="" /></label>
            </div>
            <div className='col-lg-6'>
            <Form className='mb-3 text-center'>
                
              <Form.Control value={project.title}   className='mb-3 rounded'  type="text" placeholder="Project Title" />
              <Form.Control value={project.languages}  className='mb-3 rounded' type="text" placeholder="Languages Used" />
              <Form.Control value={project.gitHub}   className='mb-3 rounded'  type="text" placeholder="GitHub Link" />

              <Form.Control value={project.website}   className='mb-3 rounded' type="text" placeholder="Website Link" />
              <Form.Control value={project.overview}   className='mb-3 rounded' type="text" placeholder="Project Overview" />

      
              </Form>


            </div>

         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            cancel
          </Button>
          <Button type='submit'  variant="primary">update</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default EditProject